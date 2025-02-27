import { Stats, columns } from "./columns"
import { DataTable } from "./data-table"
import { Badge } from "@/components/ui/badge";
import * as React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

  // This is not supposed to be here, as I will have to get most of my data from the database and not from the API.
  // But I'm just testing it out. This will have to move to a separate file and be utilized in the @/app/page.tsx file & @/app/servers/page.tsx file.
  // I'm gonna take inspiration from https://playpark.se/ and show some servers on the home page and then have the rest in @/app/servers/page.tsx.

export type Servers = {
  id: string
  ip: string
  port: string
  game: string
  platform: string
}

const Servers = [
  {
    id: "retake",
    ip: "179.61.132.128",
    port: "27015",
    game: "CS2",
    platform: "Steam"
  },
  {
    id: "fivem",
    ip: "103.177.248.111",
    port: "30120",
    game: "FiveM",
    platform: "FiveM"
  }
]
 
async function getData(): Promise<Stats[]> {
  // Move this!
  // FiveM server API query
  // const res = await fetch(`http://${Servers[0].ip}:${Servers[0].port}/info.json`)
  // const data = await res.json()
  // console.log(data)

  // CS2 server API query
  // const res = await fetch(`https://api.steampowered.com/IGameServersService/GetServerList/v1/?key=F941F61503D2F7B047FB99DF1F5AE1F2&filter=addr%5C${Servers[0].ip}:${Servers[0].port}`)
  // const data = await res.json()
  // console.log(data.response.servers[0])

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