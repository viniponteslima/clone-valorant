import type { PlayerState } from "@/types/PlayerState";

export const playerStates: Record<PlayerState, { textState: string; colorState: string }> = {
  Disponivel: {
    textState: "Disponível",
    colorState: "#5DA296",
  },
  EmJogo: {
    textState: "Em Jogo",
    colorState: "#54A3DA",
  },
  Ausente: {
    textState: "Ausente",
    colorState: "#98999A",
  },
};
