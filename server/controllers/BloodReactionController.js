import { query_db } from "../services/connectDb.js";

export const getBloodReaction = (req, res) => {
  try {
    console.log("hello world.");
    res.status(200).json("hello world.");
  } catch (error) {
    console.log(error);
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
