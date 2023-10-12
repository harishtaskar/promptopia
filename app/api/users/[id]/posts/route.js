import Prompt from "@model/prompt";
import { connectToDB } from "@utils/database";

export const GET = async (request, { params }) => {
  try {
    connectToDB();
    const prompt = await Prompt.find({ creator: params.id }).populate(
      "creator"
    );
    return new Response(JSON.stringify(prompt), { status: 200 });
  } catch (error) {
    return new Response("Failed to find posts for this profile", {
      status: 500,
    });
  }
};
