import { query_db } from "../services/connectDb.js";
import { createError } from "../utils/createError.js";

export const getBloodReaction = async (req, res) => {
  try {
    const { bb_cross_macth_id } = req.query;
    if (!bb_cross_macth_id) {
      throw createError(400, "กรุณาระบุ bb_cross_macth_id");
    }
    const result = await query_db(
      `SELECT
        b2.blood_code,
        b2.blood_cc_balance,
        b3.blood_group_name,
        b2.rh,
        b4.blood_type_name,
        b2.bb_receive_date,
        b2.blood_ready_date,
        b2.blood_expire_date,
        b5.bb_resource_name,
        b2.bb_receive_note,
        b1.patient_pay_date as cross_patient_pay_date,
        b1.blood_group_name as cross_blood_group_name,
        b1.rh as cross_rh,
        b1.hn as cross_hn,
        b1.patient_name as cross_patient_name,
        b1.bb_lookup_violence_id as cross_bb_lookup_violence_id,
        b6.bb_lookup_violence_name as cross_bb_lookup_violence_name,
        b1.reaction_status as cross_reaction_status,
        b1.receive_blood_cc as cross_receive_blood_cc,
        b1.receive_blood_time as cross_receive_blood_time,
        b1.reaction_blood_time as cross_reaction_blood_time,
        b1.reaction_flu_temp as cross_reaction_flu_temp,
        b1.reaction_cold as cross_reaction_cold,
        b1.reaction_rash as cross_reaction_rash,
        b1.reaction_headache as cross_reaction_headache,
        b1.reaction_bp as cross_reaction_bp,
        b1.reaction_nausea as cross_reaction_nausea,
        b1.reaction_volmit as cross_reaction_volmit,
        b1.reaction_backache as cross_reaction_backache,
        b1.reaction_breath as cross_reaction_breath,
        b1.reaction_green as cross_reaction_green,
        b1.reaction_shock as cross_reaction_shock,
        b1.reaction_note as cross_reaction_note,
        b1.reaction_staff,
        b1.reaction_date,
        b1.reaction_time,
        b1.staff_id,
        s1.staff_name,
        b1.save_date,
        b1.save_time
      FROM bb_cross_macth b1
      LEFT JOIN bb_receive b2 ON b2.bb_receive_id=b1.bb_receive_id
      LEFT JOIN blood_group b3 ON b3.blood_group_id=b2.blood_group_id
      LEFT JOIN blood_type b4 ON b4.blood_type_id=b2.blood_type_id
      LEFT JOIN bb_resource b5 ON b5.bb_resource_id=b2.bb_resource_id
      LEFT JOIN bb_lookup_violence b6 ON b6.bb_lookup_violence_id=b1.bb_lookup_violence_id
      LEFT JOIN staff s1 ON s1.staff_id=b1.staff_id
      WHERE b1.bb_cross_macth_id = ?`,
      [bb_cross_macth_id]
    );

    if (!result || result.length === 0) {
      throw createError(404, "ไม่พบข้อมูลของการให้โลหิตนี้");
    }

    res.status(200).json({
      success: true,
      data: {
        bloodBag: {
          bloodCode: result[0].blood_code,
          groupName: result[0].blood_group_name,
          rh: result[0].rh,
          ccBalance: result[0].blood_cc_balance,
          typeName: result[0].blood_type_name,
          resourceName: result[0].bb_resource_name,
          receiveDate: result[0].bb_receive_date,
          readyDate: result[0].blood_ready_date,
          expireDate: result[0].blood_expire_date,
        },
        crossMatch: {
          patientName: result[0].cross_patient_name,
          hn: result[0].cross_hn,
          bloodGroup_name: result[0].cross_blood_group_name,
          rh: result[0].cross_rh,
          patientPayDate: result[0].cross_patient_pay_date,
        },
        violence: {
          violenceId: result[0].cross_bb_lookup_violence_id,
          violenceName: result[0].cross_bb_lookup_violence_name,
        },
        reaction: {
          reactionStatus: result[0].cross_reaction_status,
          reactionBloodCC: result[0].cross_receive_blood_cc,
          reactionBlood_Time: result[0].cross_receive_blood_time,
          reactionBloodTime: result[0].cross_reaction_blood_time,
          reactionFluTemp: result[0].cross_reaction_flu_temp,
          reactionCold: result[0].cross_reaction_cold,
          reactionRash: result[0].cross_reaction_rash,
          reactionHeadache: result[0].cross_reaction_headache,
          reactionBp: result[0].cross_reaction_bp,
          reactionNausea: result[0].cross_reaction_nausea,
          reactionVolmit: result[0].cross_reaction_volmit,
          reactionBackache: result[0].cross_reaction_backache,
          reactionBreath: result[0].cross_reaction_breath,
          reactionGreen: result[0].cross_reaction_green,
          reactionShock: result[0].cross_reaction_shock,
          reactionNote: result[0].cross_reaction_note,
        },
        nurse: {
          nurseName: result[0].reaction_staff,
          nurseDate: result[0].reaction_date,
          nurseTime: result[0].reaction_time,
        },
        staff: {
          staffId: result[0].staff_id,
          staffName: result[0].staff_name,
          staffDate: result[0].save_date,
          staffTime: result[0].save_time,
        },
      },
    });
  } catch (error) {
    console.log(error);
    res.status(error.status || 500).json({
      success: false,
      message: error.message || "เกิดข้อผิดพลาดในฝั่งเซิร์ฟเวอร์",
    });
  }
};

export const getViolence = async (req, res) => {
  try {
    const result = await query_db(
      "SELECT bb_lookup_violence_id,bb_lookup_violence_name FROM bb_lookup_violence ORDER BY bb_lookup_violence_id ASC"
    );

    if (!result || result.length == 0) {
      throw createError(404, "ไม่พบข้อมูล");
    }

    res.status(200).json({
      success: true,
      data: result.map((violence) => ({
        violenceId: violence.bb_lookup_violence_id,
        violenceName: violence.bb_lookup_violence_name,
      })),
    });
  } catch (error) {
    console.log(error);
  }
};
