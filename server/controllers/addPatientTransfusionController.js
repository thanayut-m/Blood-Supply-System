import { query_db } from "../services/connectDb .js";

export const getAllPatientTransfusionsInfo = async (req, res, next) => {
  try {
    const today = new Date().toISOString().slice(0, 10);
    const result = await query_db(
      `SELECT
            b2.bb_cross_macth_id,
            b1.hn,
            b1.patient_name,
            b2.blood_code,
            b2.cm_result_name,
            b2.patient_pay_date,
            b2.patient_pay_staff_name,
            b4.hct,
            b4.hct_after,
            bt.blood_type_sub_name,
            b2.patient_pay_status
        FROM bb_stat b1
        LEFT OUTER JOIN bb_cross_macth b2 ON b2.bb_order_id = b1.bb_order_id
        LEFT OUTER JOIN bb_receive b3 ON b3.bb_receive_id = b2.bb_receive_id
        LEFT OUTER JOIN bb_test b4 ON b4.bb_order_id = b1.bb_order_id
        LEFT OUTER JOIN blood_type bt ON bt.blood_type_id = b2.blood_type_id
        WHERE b2.pay_status = ?
        AND b3.bb_supply_date BETWEEN ? AND ?`,
      ["y", today, today]
    );

    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const getAllPatientTransfusions = async (req, res, next) => {
  try {
    const { bb_cross_macth_id } = req.body;
    const result = await query_db(
      `SELECT 
        s1.hn,
        s1.patient_name,
        s1.patient_age,
        s1.sex_name,
        s1.blood_group_name,
        s1.rh,
        s2.patient_pay_date,
        s2.patient_pay_time,
        s2.patient_pay_staff_id,
        s2.patient_pay_staff_name, 
        s3.o1_result_name,
        s3.o2_result_name,
        s3.o3_result_name,
        s3.ac_result_name,
        s3.dat_result_name,
        s3.iat_result_name,
        s2.blood_code,
        s2.blood_group_name AS cross_blood_group_name,
        s2.rh AS cross_rh,
        s4.blood_type_name,
        s2.blood_expire_date,
        s2.blood_cc,
        s2.cm_result,
        s2.bb_cross_macth_staff,
        s2.bb_cross_macth_date,
        s2.bb_cross_macth_time,
        s2.bb_cross_confirm_staff,
        s2.confirm_date,
        s2.confirm_time,
        s2.confirm,
        s2.report_status,
        s2.pay_status,
        s2.reaction
      FROM bb_stat s1
      LEFT JOIN bb_cross_macth s2 ON s1.bb_order_id=s2.bb_order_id 
      LEFT JOIN bb_test s3 ON s2.bb_test_id=s3.bb_test_id
      LEFT JOIN blood_type s4 ON s2.blood_type_id=s4.blood_type_id
      WHERE s2.bb_cross_macth_id = ?`,
      [bb_cross_macth_id]
    );
    res.status(200).json({
      success: true,
      data: {
        hn: result[0].hn,
        patientName: result[0].patient_name,
        age: result[0].patient_age,
        sex: result[0].sex_name,
        bloodGroup: result[0].blood_group_name,
        rhType: result[0].rh,
        transfusionDate: result[0].patient_pay_date,
        transfusionTime: result[0].patient_pay_time,
        staffId: result[0].patient_pay_staff_id,
        staffName: result[0].patient_pay_staff_name,
        o1Result: result[0].o1_result_name,
        o2Result: result[0].o2_result_name,
        o3Result: result[0].o3_result_name,
        acResult: result[0].ac_result_name,
        datResult: result[0].dat_result_name,
        iatResult: result[0].iat_result_name,
        bloodCode: result[0].blood_code,
        crossBloodGroup: result[0].cross_blood_group_name,
        crossRh: result[0].cross_rh,
        bloodType: result[0].blood_type_name,
        expireDate: result[0].blood_expire_date,
        volumeCC: result[0].blood_cc,
        cmResult: result[0].cm_result,
        crossMatchBy: result[0].bb_cross_macth_staff,
        crossMatchDate: result[0].bb_cross_macth_date,
        crossMatchTime: result[0].bb_cross_macth_time,
        confirmBy: result[0].bb_cross_confirm_staff,
        confirmDate: result[0].confirm_date,
        confirmTime: result[0].confirm_time,
        isConfirmed: result[0].confirm,
        reportStatus: result[0].report_status,
        payStatus: result[0].pay_status,
        hasReaction: result[0].reaction,
      },
    });
  } catch (error) {
    next(error);
  }
};
