// import { env } from "@/app/env"
import { Octokit } from "octokit";

export const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });
