import { query_db } from "../services/connectDb.js";
import createError from "http-errors";

export const getBloodBankStock = async (req, res, next) => {
  try {
    const { startDate, endDate, bloodSubType } = req.query;
    console.log(bloodSubType);
    let baseQuery = `SELECT
        s2.blood_type_sub_name,
        s2.blood_group_name,
        s2.rh,
        s2.blood_code,
        s2.hn,
        s2.patient_name,
        s2.cm_result_name,
        s2.bb_cross_pay_staff,
        s2.pay_date
      FROM bb_cross_macth s2
      WHERE s2.pay_status = ?`;

    const params = ["Y"];

    if (startDate && endDate) {
      baseQuery += ` AND s2.pay_date BETWEEN ? AND ?`;
      params.push(startDate, endDate);
    } else if (startDate) {
      baseQuery += ` AND s2.pay_date >= ?`;
      params.push(startDate);
    } else if (endDate) {
      baseQuery += ` AND s2.pay_date <= ?`;
      params.push(endDate);
    }

    if (bloodSubType) {
      baseQuery += ` AND s2.blood_type_sub_name = ?`;
      params.push(bloodSubType);
    }

    baseQuery += ` ORDER BY s2.pay_date DESC`;

    const result = await query_db(baseQuery, params);

    if (!result || result.length === 0) {
      throw createError(404, "ไม่พบข้อมูลของการให้โลหิต");
    }

    const transformedResult = result.map((row) => ({
      bloodTypeSubName: row.blood_type_sub_name,
      bloodGroupName: row.blood_group_name,
      rh: row.rh,
      bloodCode: row.blood_code,
      hn: row.hn,
      patientName: row.patient_name,
      cmResultName: row.cm_result_name,
      bbCrossPayStaff: row.bb_cross_pay_staff,
      payDate: row.pay_date,
    }));

    res.status(200).json({
      success: true,
      data: transformedResult,
    });
  } catch (error) {
    next(error);
  }
};

export const getBloodTypeOption = async (req, res, next) => {
  try {
    const result = await query_db(
      `SELECT blood_type_id,blood_type_sub_name FROM blood_type WHERE show_fields = ?`,
      ["Y"]
    );

    const transformedResult = result.map((row) => ({
      typeId: row.blood_type_id,
      typeName: row.blood_type_sub_name,
    }));

    res.status(200).json({
      success: true,
      data: transformedResult,
    });
  } catch (error) {
    next(error);
  }
};

export const getTotalBlood = async (req, res, next) => {
  try {
    const result = await query_db(
      `SELECT
        s2.blood_type_sub_name,
        SUM(if(s3.blood_group_name = "A" AND s1.blood_status = "Y",1,0)) AS 'a',
        SUM(if(s3.blood_group_name = "B" AND s1.blood_status = "Y",1,0)) AS 'b',
        SUM(if(s3.blood_group_name = "AB" AND s1.blood_status = "Y",1,0)) AS 'ab',
        SUM(if(s3.blood_group_name = "O" AND s1.blood_status = "Y",1,0)) AS 'o',
        SUM(if(s3.blood_group_name = "ไม่ทราบ" AND s1.blood_status = "Y",1,0)) AS 'non'
      FROM bb_receive s1
      LEFT JOIN blood_type s2 ON s2.blood_type_id=s1.blood_type_id
      LEFT JOIN blood_group s3 ON s3.blood_group_id=s1.blood_group_id
      WHERE s1.blood_status =?
      GROUP BY s2.blood_type_sub_name`,
      ["Y"]
    );

    const transformedResult = result.map((row) => ({
      bloodTypeName: row.blood_type_sub_name,
      groupA: row.a,
      groupB: row.b,
      groupAB: row.ab,
      groupO: row.o,
      groupNon: row.non,
    }));

    res.status(200).json({
      success: true,
      data: transformedResult,
    });
  } catch (error) {
    next(error);
  }
};
