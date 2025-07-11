import { query_db } from "../services/connectDb .js";

export const getAllPatientTransfusions = async (req, res, next) => {
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
