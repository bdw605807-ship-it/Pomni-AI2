import { AiChat } from "../../system/utils.js";

const handler = async (m, { conn, text, bot }) => {
  if (!text) return m.reply(" 🤨 ايه يحبيب قلبي حد مضايقك ");
  const res = await AiChat({ text });
  m.reply(res);
};

handler.usage = ["برازيلي"];
handler.category = "ai";
handler.command = ["برازيلي"];

export default handler;
