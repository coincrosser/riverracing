import type {RaceEvent} from "./events";
const rows=[
  [
    "Head Of The Charles 2026",
    "2026-10-16",
    "2026-10-18",
    "Cambridge",
    "Massachusetts",
    "Head",
    "Head Of The Charles Regatta",
    "Charles River",
    "10096"
  ],
  [
    "Halloween Regatta",
    "2026-10-24",
    "2026-10-24",
    "Tampa",
    "Florida",
    "Head",
    "Plant High Rowing Association, Inc",
    "Bypass Canal",
    "9971"
  ],
  [
    "Head of the American",
    "2026-10-24",
    "2026-10-24",
    "Gold River",
    "California",
    "Head",
    "Sacramento State Aquatic Center/Capital",
    "Lake Natoma",
    "10066"
  ],
  [
    "Blake Haxton Fall Regatta",
    "2026-10-24",
    "2026-10-24",
    "Columbus",
    "Ohio",
    "Head",
    "Upper Arlington Crew, Inc.",
    "Griggs Reservoir (South)",
    "10094"
  ],
  [
    "Head of the Brazos",
    "2026-10-24",
    "2026-10-24",
    "Waco",
    "Texas",
    "Head",
    "Baylor Crew",
    "Baylor Crew Boathouse",
    "10109"
  ],
  [
    "Head of the Schuylkill Regatta",
    "2026-10-24",
    "2026-10-25",
    "Philadelphia",
    "Pennsylvania",
    "Head",
    "Head of the Schuylkill Regatta",
    "Schuylkill River",
    "10191"
  ],
  [
    "High Point Autumn Rowing Festival",
    "2026-10-24",
    "2026-10-24",
    "High Point",
    "North Carolina",
    "Head",
    "Triad United Rowing Association",
    "Oak Hollow Lake",
    "10213"
  ],
  [
    "Wormtown Chase",
    "2026-10-24",
    "2026-10-24",
    "Worcester",
    "Massachusetts",
    "Head",
    "Quinsigamond Rowing Association, Inc.",
    "Lake Quinsigamond",
    "10563"
  ],
  [
    "MPSRA Fall Championship",
    "2026-10-25",
    "2026-10-25",
    "Lowell",
    "Massachusetts",
    "Head",
    "Massachusetts Public Schools Rowing Association",
    "Merrimack River",
    "10074"
  ],
  [
    "Chicago Dirty Dozen October 6k Challenge",
    "2026-10-25",
    "2026-10-25",
    "Chicago",
    "Illinois",
    "Head",
    "Alliance Rowing Club of Illinois",
    "Chicago River - Dammrich Boathouse",
    "10089"
  ],
  [
    "Speakmon Memorial Regatta",
    "2026-10-25",
    "2026-10-25",
    "Columbus",
    "Ohio",
    "Head",
    "Greater Columbus Rowing Association",
    "Griggs Reservoir (South)",
    "10491"
  ],
  [
    "Richmond Chase 2026",
    "2026-10-25",
    "2026-10-25",
    "Richmond",
    "Virginia",
    "Head",
    "Crew Club at VCU",
    "James River - Robious Landing Park",
    "10496"
  ],
  [
    "Portland Fall Classic",
    "2026-10-25",
    "2026-10-25",
    "Vancouver",
    "Washington",
    "Head",
    "Station L Rowing Club",
    "Vancouver Lake",
    "10542"
  ],
  [
    "Head of the Lafayette",
    "2026-10-25",
    "2026-10-25",
    "Norfolk",
    "Virginia",
    "Head",
    "Hampton Roads Rowing Club, Ltd.",
    "Lafayette River - Lakewood Park",
    "10553"
  ],
  [
    "Massachusetts Maritime Invitational",
    "2026-10-31",
    "2026-10-31",
    "Plymouth",
    "Massachusetts",
    "Sprint",
    "Massachusetts Maritime Academy",
    "Keith Hartford Sailing Center",
    "10033"
  ],
  [
    "Music City Head Race",
    "2026-10-31",
    "2026-10-31",
    "Nashville",
    "Tennessee",
    "Head",
    "Music City Head Race",
    "Cumberland River",
    "10055"
  ],
  [
    "Pull The Plug",
    "2026-10-31",
    "2026-10-31",
    "Pittsford",
    "New York",
    "Head",
    "Pittsford Crew",
    "Erie Canal",
    "10178"
  ],
  [
    "Green Lake Frostbite Regatta",
    "2026-10-31",
    "2026-10-31",
    "Seattle",
    "Washington",
    "Sprint",
    "Green Lake Rowing Advisory Council",
    "Green Lake Small Craft Center",
    "10208"
  ],
  [
    "Head of the Occoquan",
    "2026-10-31",
    "2026-11-01",
    "Fairfax Station",
    "Virginia",
    "Head",
    "Occoquan Boat Club",
    "Sandy Run Boathouse",
    "10438"
  ],
  [
    "Wichita Frostbite Regatta",
    "2026-11-01",
    "2026-11-01",
    "Wichita",
    "Kansas",
    "Head",
    "Wichita Rowing Association",
    "Little Arkansas River",
    "10518"
  ],
  [
    "Mercer Fall Classic",
    "2026-11-01",
    "2026-11-01",
    "West Windsor",
    "New Jersey",
    "Head",
    "Princeton National Rowing Association/Mercer",
    "Mercer Lake",
    "10551"
  ],
  [
    "Hidden River Chase",
    "2026-11-01",
    "2026-11-01",
    "Philadelphia",
    "Pennsylvania",
    "Head",
    "Philadelphia Scholastic Rowing Association",
    "Schuylkill River",
    "10559"
  ],
  [
    "Princeton 3-Mile Chase",
    "2026-11-01",
    "2026-11-01",
    "Princeton",
    "New Jersey",
    "Head",
    "Carnegie Lake Rowing Association",
    "Lake Carnegie",
    "10564"
  ],
  [
    "Steerhead Regatta",
    "2026-11-01",
    "2026-11-01",
    "Fort Worth",
    "Texas",
    "Head",
    "Fort Worth Rowing Club",
    "Marine Creek Lake",
    "10579"
  ],
  [
    "Head of the Lake",
    "2026-11-01",
    "2026-11-01",
    "Seattle",
    "Washington",
    "Head",
    "Lake Washington Rowing Club",
    "Lake Washington",
    "10593"
  ],
  [
    "Head of the Hooch",
    "2026-11-07",
    "2026-11-08",
    "Chattanooga",
    "Tennessee",
    "Head",
    "Friends of the Hooch, Inc.",
    "Tennessee River",
    "10529"
  ],
  [
    "Head of the Lagoon - Masters & Singles",
    "2026-11-07",
    "2026-11-07",
    "Foster City",
    "California",
    "Head",
    "Redwood Scullers/PACJC",
    "Foster City Lagoon",
    "10540"
  ],
  [
    "Philadelphia Frostbite Regatta",
    "2026-11-07",
    "2026-11-07",
    "West Windsor",
    "New Jersey",
    "Sprint",
    "Pennsylvania Barge Club",
    "Mercer Lake",
    "10596"
  ],
  [
    "San Diego Fall Classic",
    "2026-11-08",
    "2026-11-08",
    "San Diego",
    "California",
    "Head",
    "San Diego Rowing Club",
    "Fiesta Bay-Crown Point Shores",
    "10130"
  ],
  [
    "Bill Braxton Memorial Regatta",
    "2026-11-08",
    "2026-11-08",
    "West Windsor",
    "New Jersey",
    "Sprint",
    "Philadelphia Girls' Rowing Club",
    "Mercer Lake",
    "10340"
  ],
  [
    "Head of the Lagoon - Juniors",
    "2026-11-08",
    "2026-11-08",
    "Foster City",
    "California",
    "Head",
    "Redwood Scullers/PACJC",
    "Foster City Lagoon",
    "10541"
  ],
  [
    "Dexter Lake Fall Classic",
    "2026-11-08",
    "2026-11-08",
    "Lowell",
    "Oregon",
    "Head",
    "Eugene Rowing Club",
    "Dexter Lake",
    "10597"
  ],
  [
    "Head of the South",
    "2026-11-14",
    "2026-11-14",
    "Augusta",
    "Georgia",
    "Head",
    "Augusta Rowing Club, Inc.",
    "Savannah River",
    "10102"
  ],
  [
    "2026 Naples Island Collegiate and Masters Rowing Challenge / Pancake Regatta",
    "2026-11-14",
    "2026-11-14",
    "Long Beach",
    "California",
    "Head/Sprint",
    "Cal State Long Beach Crew",
    "Long Beach Marine Stadium",
    "10499"
  ],
  [
    "Swamp Cup",
    "2026-11-14",
    "2026-11-14",
    "Fellsmere",
    "Florida",
    "Head",
    "Sebastian River Rowing Inc.",
    "Canal 54",
    "10572"
  ],
  [
    "USRowing Small Boat National Championship",
    "2026-11-14",
    "2026-11-15",
    "West Windsor",
    "New Jersey",
    "Sprint",
    "USRowing",
    "Mercer Lake",
    "10600"
  ]
] as const;
const waterway=(venue:string)=>/river|lake|creek|canal|reservoir|lagoon|bay|sound/i.test(venue)?venue.replace(/\s+-.*$/,""):"";
const slug=(s:string)=>s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"");
export const rowingNational:RaceEvent[]=rows.map(([name,startDate,endDate,city,state,type,organizer,venue,id])=>({
 slug:`${slug(name)}-${startDate.slice(0,4)}-${slug(city)}`,name,sports:["Rowing"],eventTypes:type==="Head"?["Regatta","Head race"]:["Regatta"],startDate,endDate,city,state,country:"United States",waterway:waterway(venue),venue,organizer,audience:["Participant","Spectator"],registrationUrl:`https://www.regattacentral.com/regatta/?job_id=${id}`,officialUrl:`https://www.regattacentral.com/regatta/?job_id=${id}`,status:"Confirmed",registrationStatus:"See official source",verifiedAt:"2026-10-11",summary:`${type} rowing competition hosted by ${organizer}.`,market:"National"
}));

