"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Stats = {
  id: string
  user: string
  rank: string
  score: number
  kills: number
  deaths: number
  kd: string
}

export const columns: ColumnDef<Stats>[] = [
  {
    accessorKey: "user",
    header: "Username",
  },
  {
    accessorKey: "rank",
    header: "Rank",
  },
  {
    accessorKey: "score",
    header: "Score",
  },
  {
    accessorKey: "kills",
    header: "Kills",
  },
  {
    accessorKey: "deaths",
    header: "Deaths",
  },
  {
    accessorKey: "kd",
    header: "K/D",
  }
]
