"use client";
import { ProjectType } from "@/types/projects";
import { create } from "zustand";

// Define the initial state and types
interface State {
  show: boolean;
  payload: ProjectType | null;
}

interface Actions {
  toggle: (value: boolean) => void;
  sendPayload: (payload: ProjectType | null) => void;
}

const ProjectDetails = create<State & Actions>((set) => ({
  show: false,
  payload: null,
  toggle: (value) => set({ show: value }),
  sendPayload: (payload) => set({ payload }),
}));

export default ProjectDetails;
