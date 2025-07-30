import { query_db } from "../services/connectDb.js";
import createError from "http-errors";

export const getDonorList = async (req, res, next) => {
  try {
    const { search_donorList } = req.query;

    const baseQuery = `SELECT
        s1.bb_donor_code,
        s1.donor_name,
        s1.donor_age,
        s1.blood_group_name,
        s1.rh,
        s1.donate_no,
        s1.visit_date,
        s1.blood_code,
        s1.cid,
        s2.telephone,
        s1.reactive,
        s1.bb_donor_resource_name,
        s2.addrpart,
        s1.staff_name,
        s1.abo_discrepancy
      FROM bb_donor_stat s1
      LEFT JOIN bb_donor s2 ON s1.bb_donor_id = s2.bb_donor_id
    `;

    let result;

    if (search_donorList) {
      result = await query_db(
        `${baseQuery} WHERE s1.cid = ? ORDER BY s1.visit_date DESC`,
        [search_donorList]
      );
    } else {
      result = await query_db(`${baseQuery} ORDER BY s1.visit_date DESC`);
    }

    if (!result || result.length === 0) {
      throw createError(404, "ไม่พบข้อมูลของการให้โลหิต");
    }

    const transformedResult = result.map((donor) => ({
      donorCode: donor.bb_donor_code,
      donorName: donor.donor_name,
      donorAge: donor.donor_age,
      bloodGroupName: donor.blood_group_name,
      rh: donor.rh,
      donateNo: donor.donate_no,
      visitDate: donor.visit_date,
      bloodCode: donor.blood_code,
      cId: donor.cid,
      telePhone: donor.telephone,
      reactive: donor.reactive,
      bbDonorResourceName: donor.bb_donor_resource_name,
      addrpart: donor.addrpart,
      staffName: donor.staff_name,
      aboDiscrepancy: donor.abo_discrepancy,
    }));

    res.status(200).json({
      success: true,
      data: transformedResult,
    });
  } catch (error) {
    next(error);
  }
};
