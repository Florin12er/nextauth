"use server";

import { db } from "@/lib/db";
import { getUserByEmail } from "@/data/user";
import { getVerificationTokenByToken } from "@/data/verfication-token";

export const newVerification = async (token: string) => {
  try {
    const existingToken = await getVerificationTokenByToken(token);

    if (!existingToken) {
      return { error: "Invalid token" };
    }

    const hasExpired = new Date(existingToken.expires) < new Date();

    if (hasExpired) {
      // Optionally delete expired token
      await db.verificationToken.delete({
        where: { id: existingToken.id },
      });
      return { error: "Token has expired" };
    }

    const existingUser = await getUserByEmail(existingToken.email);

    if (!existingUser) {
      return { error: "Email not found" };
    }

    await db.user.update({
      where: { id: existingUser.id },
      data: {
        emailVerified: new Date(),
        email: existingToken.email,
      },
    });

    await db.verificationToken.delete({
      where: { id: existingToken.id },
    });

    return { success: "Email verified" };
  } catch (error) {
    console.error("Verification error:", error);
    return { error: "An error occurred during verification" };
  }
};
