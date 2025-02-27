import { Stats, columns } from "./columns"
import { DataTable } from "./data-table"
import { Badge } from "@/components/ui/badge";
import * as React from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
 
async function getData(): Promise<Stats[]> {
  // Fetch data from database here.
  return [
    {
      id: "728ed52f",
      user: "LG",
      rank: "1",
      score: 100000,
      kills: 100,
      deaths: 50,
      kd: "1.06"
    },
    {
      id: "728ed32d",
      user: "LG2",
      rank: "2",
      score: 99999,
      kills: 100,
      deaths: 60,
      kd: "1.36"
    },
    {
      id: "728ed32g",
      user: "LG3",
      rank: "3",
      score: 99999,
      kills: 100,
      deaths: 60,
      kd: "1.36"
    },
    {
      id: "728ed32g",
      user: "LG3",
      rank: "3",
      score: 99999,
      kills: 100,
      deaths: 60,
      kd: "1.36"
    },
    {
      id: "728ed32g",
      user: "LG3",
      rank: "3",
      score: 99999,
      kills: 100,
      deaths: 60,
      kd: "1.36"
    },
    {
      id: "728ed32g",
      user: "LG3",
      rank: "3",
      score: 99999,
      kills: 100,
      deaths: 60,
      kd: "1.36"
    },
    {
      id: "728ed32g",
      user: "LG3",
      rank: "3",
      score: 99999,
      kills: 100,
      deaths: 60,
      kd: "1.36"
    },
    {
      id: "728ed32g",
      user: "LG3",
      rank: "3",
      score: 99999,
      kills: 100,
      deaths: 60,
      kd: "1.36"
    },
    {
      id: "728ed32g",
      user: "LG3",
      rank: "3",
      score: 99999,
      kills: 100,
      deaths: 60,
      kd: "1.36"
    },
    {
      id: "728ed32g",
      user: "LG3",
      rank: "3",
      score: 99999,
      kills: 100,
      deaths: 60,
      kd: "1.36"
    },
    {
      id: "728ed32g",
      user: "LG3",
      rank: "3",
      score: 99999,
      kills: 100,
      deaths: 60,
      kd: "1.36"
    },
    {
      id: "728ed32g",
      user: "LG3",
      rank: "3",
      score: 99999,
      kills: 100,
      deaths: 60,
      kd: "1.36"
    },
    {
      id: "728ed32g",
      user: "LG3",
      rank: "3",
      score: 99999,
      kills: 100,
      deaths: 60,
      kd: "1.36"
    },
    {
      id: "728ed32g",
      user: "LG3",
      rank: "3",
      score: 99999,
      kills: 100,
      deaths: 60,
      kd: "1.36"
    },
    {
      id: "728ed32g",
      user: "LG3",
      rank: "3",
      score: 99999,
      kills: 100,
      deaths: 60,
      kd: "1.36"
    },
  ]
}

export default async function Statistics() {
    const data = await getData()
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-x-32 gap-y-4 sm:p-20 w-full">
      <div className="flex flex-col row-start-2 items-center sm:items-start">
        <Card className="w-lg">
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>Statistik - Retake #1</CardTitle>
              <Badge className="float-right">CS2</Badge>
            </div>
            <CardDescription>Fullständig spelarstatistik från Retake #1.</CardDescription>
          </CardHeader>
          <CardContent>
          <DataTable columns={columns} data={data} />
          </CardContent>
        </Card>
      </div>
      <div className="flex flex-col row-start-2 items-center sm:items-start">
        <Card className="w-lg">
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>Statistik - Retake #2</CardTitle>
              <Badge className="float-right">CS2</Badge>
            </div>
            <CardDescription>Fullständig spelarstatistik från Retake #2.</CardDescription>
          </CardHeader>
          <CardContent>
          <DataTable columns={columns} data={data} />
          </CardContent>
        </Card>
      </div>
      <div className="flex flex-col row-start-2 items-center sm:items-start">
        <Card className="w-lg">
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>Statistik - Retake #3</CardTitle>
              <Badge className="float-right">CS2</Badge>
            </div>
            <CardDescription>Fullständig spelarstatistik från Retake #3.</CardDescription>
          </CardHeader>
          <CardContent>
          <DataTable columns={columns} data={data} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}