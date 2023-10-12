import Prompt from "@model/prompt";
import { connectToDB } from "@utils/database";

export const GET = async (request) => {
  try {
    connectToDB();
    const prompt = await Prompt.find({}).populate("creator");
    return new Response(JSON.stringify(prompt), { status: 200 });
  } catch (error) {
    return new Response("Failed to find posts", { status: 500 });
  }
};
