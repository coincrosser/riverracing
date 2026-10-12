import type {RaceEvent} from "./events";

type RawUpcoming = {
  name:string;
  startDate:string;
  endDate?:string;
  city:string;
  state:string;
  organizer:string;
  discipline:string;
  url:string;
};

const rawUpcoming:RawUpcoming[]=[
  {
    "name": "2026 J/105 North American Championship",
    "startDate": "2026-10-14",
    "endDate": "2026-10-18",
    "city": "Seattle",
    "state": "WA",
    "organizer": "Corinthian Yacht Club of Seattle / J/105 Class Association",
    "discipline": "Sailing",
    "url": "https://j105.org/events/"
  },
  {
    "name": "2026 Fall Brawl Invitational",
    "startDate": "2026-10-24",
    "endDate": "2026-10-25",
    "city": "Annapolis",
    "state": "MD",
    "organizer": "Eastport Yacht Club / J/105 Class Association",
    "discipline": "Sailing",
    "url": "https://j105.org/events/"
  },
  {
    "name": "Sunkist Series - Inside/Dinghy Classes",
    "startDate": "2026-11-01",
    "endDate": "2027-02-06",
    "city": "Corona del Mar",
    "state": "CA",
    "organizer": "Regatta Network listed organizer",
    "discipline": "Sailing",
    "url": "https://www.regattanetwork.com/mobile/mobile_event_list.php"
  },
  {
    "name": "CHOC Regatta - Inside/One Design Classes",
    "startDate": "2026-11-01",
    "endDate": "2026-11-07",
    "city": "Corona del Mar",
    "state": "CA",
    "organizer": "Regatta Network listed organizer",
    "discipline": "Sailing",
    "url": "https://www.regattanetwork.com/mobile/mobile_event_list.php"
  },
  {
    "name": "2026-2027 SYC Chili Midwinter Series",
    "startDate": "2026-11-01",
    "city": "Sausalito",
    "state": "CA",
    "organizer": "Sausalito Yacht Club",
    "discipline": "Sailing",
    "url": "https://www.regattanetwork.com/mobile/mobile_event_list.php"
  },
  {
    "name": "2026 Blue Moon Series",
    "startDate": "2026-11-01",
    "city": "Fort Worth",
    "state": "TX",
    "organizer": "Fort Worth Boat Club",
    "discipline": "Sailing",
    "url": "https://www.regattanetwork.com/mobile/mobile_event_list.php"
  },
  {
    "name": "2026 A-Class Catamaran Admiral's Cup",
    "startDate": "2026-11-04",
    "city": "Tampa",
    "state": "FL",
    "organizer": "Davis Island Yacht Club",
    "discipline": "Sailing",
    "url": "https://www.regattanetwork.com/mobile/mobile_event_list.php"
  },
  {
    "name": "Wurstfest Regatta I",
    "startDate": "2026-11-06",
    "city": "Canyon Lake",
    "state": "TX",
    "organizer": "Lake Canyon Yacht Club",
    "discipline": "Sailing",
    "url": "https://www.regattanetwork.com/mobile/mobile_event_list.php"
  },
  {
    "name": "2026 U.S. Windsurfer National Championships",
    "startDate": "2026-11-06",
    "city": "Clearwater",
    "state": "FL",
    "organizer": "Clearwater Community Sailing Center",
    "discipline": "Sailing",
    "url": "https://www.regattanetwork.com/mobile/mobile_event_list.php"
  },
  {
    "name": "2026 Ol Man of the Sea Regatta",
    "startDate": "2026-11-06",
    "city": "Fort Worth",
    "state": "TX",
    "organizer": "Fort Worth Boat Club",
    "discipline": "Sailing",
    "url": "https://www.regattanetwork.com/mobile/mobile_event_list.php"
  },
  {
    "name": "The Jimmy Buffet Race",
    "startDate": "2026-11-07",
    "city": "Jacksonville",
    "state": "FL",
    "organizer": "The Rudder Club of Jacksonville",
    "discipline": "Sailing",
    "url": "https://www.regattanetwork.com/mobile/mobile_event_list.php"
  },
  {
    "name": "2026 Sailing Sisters Regatta",
    "startDate": "2026-11-07",
    "city": "Tampa",
    "state": "FL",
    "organizer": "Davis Island Yacht Club",
    "discipline": "Sailing",
    "url": "https://www.regattanetwork.com/mobile/mobile_event_list.php"
  },
  {
    "name": "2026 A-Class Catamaran World Championship",
    "startDate": "2026-11-07",
    "city": "Tampa",
    "state": "FL",
    "organizer": "Davis Island Yacht Club",
    "discipline": "Sailing",
    "url": "https://www.regattanetwork.com/mobile/mobile_event_list.php"
  },
  {
    "name": "Fall Race #3",
    "startDate": "2026-11-07",
    "city": "Stockton",
    "state": "CA",
    "organizer": "Stockton Sailing Club",
    "discipline": "Sailing",
    "url": "https://www.regattanetwork.com/mobile/mobile_event_list.php"
  },
  {
    "name": "Shallow Water #4 Last Light",
    "startDate": "2026-11-07",
    "city": "Marina del Rey",
    "state": "CA",
    "organizer": "South Coast Corinthian Yacht Club",
    "discipline": "Sailing",
    "url": "https://www.regattanetwork.com/mobile/mobile_event_list.php"
  },
  {
    "name": "2026 Fall Off Regatta",
    "startDate": "2026-11-07",
    "city": "Nashville",
    "state": "TN",
    "organizer": "Percy Priest Yacht Club",
    "discipline": "Sailing",
    "url": "https://www.regattanetwork.com/mobile/mobile_event_list.php"
  },
  {
    "name": "OS Winter 3",
    "startDate": "2026-11-07",
    "city": "Deltaville",
    "state": "VA",
    "organizer": "Fishing Bay Yacht Club",
    "discipline": "Sailing",
    "url": "https://www.regattanetwork.com/mobile/mobile_event_list.php"
  },
  {
    "name": "Melges 15 Youth Team Challenge",
    "startDate": "2026-11-07",
    "city": "Long Beach",
    "state": "MS",
    "organizer": "Long Beach Yacht Club",
    "discipline": "Sailing",
    "url": "https://www.regattanetwork.com/mobile/mobile_event_list.php"
  },
  {
    "name": "CHOC Regatta - Outside/PHRF Classes",
    "startDate": "2026-11-08",
    "city": "Corona del Mar",
    "state": "CA",
    "organizer": "Balboa Yacht Club",
    "discipline": "Sailing",
    "url": "https://www.regattanetwork.com/mobile/mobile_event_list.php"
  },
  {
    "name": "Sunkist Series - Outside/PHRF Classes",
    "startDate": "2026-11-08",
    "endDate": "2027-02-07",
    "city": "Corona del Mar",
    "state": "CA",
    "organizer": "Regatta Network listed organizer",
    "discipline": "Sailing",
    "url": "https://www.regattanetwork.com/mobile/mobile_event_list.php"
  },
  {
    "name": "2026 Two Harbor Fall Series Race #3",
    "startDate": "2026-11-08",
    "city": "Oxnard",
    "state": "CA",
    "organizer": "Anacapa Yacht Club",
    "discipline": "Sailing",
    "url": "https://www.regattanetwork.com/mobile/mobile_event_list.php"
  },
  {
    "name": "Wurstfest Regatta II",
    "startDate": "2026-11-13",
    "city": "Canyon Lake",
    "state": "TX",
    "organizer": "Lake Canyon Yacht Club",
    "discipline": "Sailing",
    "url": "https://www.regattanetwork.com/mobile/mobile_event_list.php"
  },
  {
    "name": "Penfield Memorial Flying Scot Regatta",
    "startDate": "2026-11-14",
    "city": "Sarasota",
    "state": "FL",
    "organizer": "Sarasota Sailing Squadron",
    "discipline": "Sailing",
    "url": "https://www.regattanetwork.com/mobile/mobile_event_list.php"
  },
  {
    "name": "Palm Beach Offshore C420 Regatta",
    "startDate": "2026-11-14",
    "city": "West Palm Beach",
    "state": "FL",
    "organizer": "Palm Beach Sailing Club",
    "discipline": "Sailing",
    "url": "https://www.regattanetwork.com/mobile/mobile_event_list.php"
  },
  {
    "name": "5th Annual Pink Ribbon Regatta for Breast Cancer Awareness",
    "startDate": "2026-11-14",
    "city": "Daytona Beach",
    "state": "FL",
    "organizer": "Halifax Sailing Association",
    "discipline": "Sailing",
    "url": "https://www.regattanetwork.com/mobile/mobile_event_list.php"
  },
  {
    "name": "Lemon Drop Regatta",
    "startDate": "2026-11-14",
    "city": "Englewood",
    "state": "FL",
    "organizer": "Englewood Sailing Association",
    "discipline": "Sailing",
    "url": "https://www.regattanetwork.com/mobile/mobile_event_list.php"
  },
  {
    "name": "OD Race Day Fall Make-Up",
    "startDate": "2026-11-15",
    "city": "New Orleans",
    "state": "LA",
    "organizer": "Southern Yacht Club",
    "discipline": "Sailing",
    "url": "https://www.regattanetwork.com/mobile/mobile_event_list.php"
  },
  {
    "name": "2026 Dinghy Fall Series #5",
    "startDate": "2026-11-15",
    "city": "Miami",
    "state": "FL",
    "organizer": "Coconut Grove Sailing Club",
    "discipline": "Sailing",
    "url": "https://www.regattanetwork.com/mobile/mobile_event_list.php"
  },
  {
    "name": "RYC Fall Match Race and Clinic",
    "startDate": "2026-11-20",
    "city": "Richmond",
    "state": "CA",
    "organizer": "Richmond Yacht Club",
    "discipline": "Sailing",
    "url": "https://www.regattanetwork.com/mobile/mobile_event_list.php"
  },
  {
    "name": "2026 Finn Class North American Championship",
    "startDate": "2026-11-20",
    "city": "Miami",
    "state": "FL",
    "organizer": "Coconut Grove Sailing Club",
    "discipline": "Sailing",
    "url": "https://www.regattanetwork.com/mobile/mobile_event_list.php"
  },
  {
    "name": "Drumstick SSS Regatta",
    "startDate": "2026-11-21",
    "city": "Sarasota",
    "state": "FL",
    "organizer": "Sarasota Sailing Squadron",
    "discipline": "Sailing",
    "url": "https://www.regattanetwork.com/mobile/mobile_event_list.php"
  },
  {
    "name": "2026 Egmont Key Race",
    "startDate": "2026-11-21",
    "city": "Tampa",
    "state": "FL",
    "organizer": "Davis Island Yacht Club",
    "discipline": "Sailing",
    "url": "https://www.regattanetwork.com/mobile/mobile_event_list.php"
  },
  {
    "name": "2026 Wassaw and McIntosh Cup Regatta",
    "startDate": "2026-11-21",
    "city": "Savannah",
    "state": "GA",
    "organizer": "Savannah Yacht Club",
    "discipline": "Sailing",
    "url": "https://www.regattanetwork.com/mobile/mobile_event_list.php"
  },
  {
    "name": "2026 Blackbeard Sailing Club Turkey Trot Regatta",
    "startDate": "2026-11-21",
    "city": "New Bern",
    "state": "NC",
    "organizer": "Blackbeard Sailing Club",
    "discipline": "Sailing",
    "url": "https://www.regattanetwork.com/mobile/mobile_event_list.php"
  },
  {
    "name": "TYCC Glowstick Regatta",
    "startDate": "2026-11-21",
    "city": "Tampa",
    "state": "FL",
    "organizer": "Tampa Yacht and Country Club",
    "discipline": "Sailing",
    "url": "https://www.regattanetwork.com/mobile/mobile_event_list.php"
  },
  {
    "name": "2026 Dinghy Fall Series #6",
    "startDate": "2026-11-22",
    "city": "Miami",
    "state": "FL",
    "organizer": "Coconut Grove Sailing Club",
    "discipline": "Sailing",
    "url": "https://www.regattanetwork.com/mobile/mobile_event_list.php"
  },
  {
    "name": "Wild Turkey Classic Plastic",
    "startDate": "2026-11-28",
    "city": "Oak View",
    "state": "CA",
    "organizer": "Ventura Sailing Club",
    "discipline": "Sailing",
    "url": "https://www.regattanetwork.com/mobile/mobile_event_list.php"
  },
  {
    "name": "CCYC Winter Classic 2027",
    "startDate": "2026-12-01",
    "city": "Coronado",
    "state": "CA",
    "organizer": "Coronado Cays Yacht Club",
    "discipline": "Sailing",
    "url": "https://www.regattanetwork.com/mobile/mobile_event_list.php"
  },
  {
    "name": "2026 Florida Keys Regional Wave Regatta",
    "startDate": "2026-12-04",
    "city": "Key Largo",
    "state": "FL",
    "organizer": "Upper Keys Sailing Club",
    "discipline": "Sailing",
    "url": "https://www.regattanetwork.com/mobile/mobile_event_list.php"
  },
  {
    "name": "The Gator Bowl Regatta One Design and Portsmouth 2026",
    "startDate": "2026-12-05",
    "city": "Jacksonville",
    "state": "FL",
    "organizer": "The Rudder Club of Jacksonville",
    "discipline": "Sailing",
    "url": "https://www.regattanetwork.com/mobile/mobile_event_list.php"
  },
  {
    "name": "2026 GBCA Fall Series Chili Chase Regatta",
    "startDate": "2026-12-05",
    "city": "Kemah",
    "state": "TX",
    "organizer": "Galveston Bay Cruising Association",
    "discipline": "Sailing",
    "url": "https://www.regattanetwork.com/mobile/mobile_event_list.php"
  },
  {
    "name": "Fall Race #4",
    "startDate": "2026-12-05",
    "city": "Stockton",
    "state": "CA",
    "organizer": "Stockton Sailing Club",
    "discipline": "Sailing",
    "url": "https://www.regattanetwork.com/mobile/mobile_event_list.php"
  },
  {
    "name": "Sailfest 2026",
    "startDate": "2026-12-05",
    "city": "Sanford",
    "state": "FL",
    "organizer": "Lake Monroe Sailing Association",
    "discipline": "Sailing",
    "url": "https://www.regattanetwork.com/mobile/mobile_event_list.php"
  },
  {
    "name": "2026 Kamikaze Regatta",
    "startDate": "2026-12-06",
    "city": "Nashville",
    "state": "TN",
    "organizer": "Percy Priest Yacht Club",
    "discipline": "Sailing",
    "url": "https://www.regattanetwork.com/mobile/mobile_event_list.php"
  },
  {
    "name": "The Gator Bowl PHRF Regatta 2026",
    "startDate": "2026-12-12",
    "city": "Jacksonville",
    "state": "FL",
    "organizer": "The Rudder Club of Jacksonville",
    "discipline": "Sailing",
    "url": "https://www.regattanetwork.com/mobile/mobile_event_list.php"
  },
  {
    "name": "Commodore's Cup SSS Regatta",
    "startDate": "2026-12-12",
    "city": "Sarasota",
    "state": "FL",
    "organizer": "Sarasota Sailing Squadron",
    "discipline": "Sailing",
    "url": "https://www.regattanetwork.com/mobile/mobile_event_list.php"
  },
  {
    "name": "DISC 2027 Hangover Regatta",
    "startDate": "2027-01-01",
    "city": "Alexandria",
    "state": "VA",
    "organizer": "Daingerfield Island Sailing Club",
    "discipline": "Sailing",
    "url": "https://www.regattanetwork.com/mobile/mobile_event_list.php"
  },
  {
    "name": "Event #1 2027 Sarasota Viper Winter Series",
    "startDate": "2027-01-09",
    "city": "Sarasota",
    "state": "FL",
    "organizer": "Sarasota Sailing Squadron",
    "discipline": "Sailing",
    "url": "https://www.regattanetwork.com/mobile/mobile_event_list.php"
  },
  {
    "name": "Gasparilla Regatta 2027",
    "startDate": "2027-01-09",
    "city": "Tampa",
    "state": "FL",
    "organizer": "Tampa Yacht and Country Club",
    "discipline": "Sailing",
    "url": "https://www.regattanetwork.com/mobile/mobile_event_list.php"
  },
  {
    "name": "2nd Annual Southernmost Youth Regatta",
    "startDate": "2027-01-15",
    "city": "Key West",
    "state": "FL",
    "organizer": "Key West Community Sailing Center",
    "discipline": "Sailing",
    "url": "https://www.regattanetwork.com/mobile/mobile_event_list.php"
  },
  {
    "name": "Snowbird SSS Regatta",
    "startDate": "2027-01-16",
    "city": "Sarasota",
    "state": "FL",
    "organizer": "Sarasota Sailing Squadron",
    "discipline": "Sailing",
    "url": "https://www.regattanetwork.com/mobile/mobile_event_list.php"
  },
  {
    "name": "Southernmost Regatta 2027",
    "startDate": "2027-01-18",
    "endDate": "2027-01-22",
    "city": "Key West",
    "state": "FL",
    "organizer": "J/105 Class Association / local organizing authority",
    "discipline": "Sailing",
    "url": "https://j105.org/events/"
  },
  {
    "name": "Frigid Digit Regatta",
    "startDate": "2027-01-23",
    "endDate": "2027-01-24",
    "city": "Seattle",
    "state": "WA",
    "organizer": "Corinthian Yacht Club of Seattle / RS Aero Class Association",
    "discipline": "Sailing",
    "url": "https://www.rsaerosailing.org/index.asp?p=events&rg=North+America&yr=2027"
  },
  {
    "name": "Event #2 2027 Sarasota Viper Winter Series",
    "startDate": "2027-02-06",
    "city": "Sarasota",
    "state": "FL",
    "organizer": "Sarasota Sailing Squadron",
    "discipline": "Sailing",
    "url": "https://www.regattanetwork.com/mobile/mobile_event_list.php"
  },
  {
    "name": "Cherry Pie SSS Regatta",
    "startDate": "2027-02-06",
    "city": "Sarasota",
    "state": "FL",
    "organizer": "Sarasota Sailing Squadron",
    "discipline": "Sailing",
    "url": "https://www.regattanetwork.com/mobile/mobile_event_list.php"
  },
  {
    "name": "18th Annual Buccaneer Blast Regatta",
    "startDate": "2027-02-06",
    "city": "Key Largo",
    "state": "FL",
    "organizer": "Mark Sorensen Youth Sailing Program",
    "discipline": "Sailing",
    "url": "https://www.regattanetwork.com/mobile/mobile_event_list.php"
  },
  {
    "name": "Helly Hansen Sailing World Regatta Series - St. Petersburg",
    "startDate": "2027-02-12",
    "endDate": "2027-02-14",
    "city": "St. Petersburg",
    "state": "FL",
    "organizer": "St. Petersburg Yacht Club / Sailing World",
    "discipline": "Sailing",
    "url": "https://www.sailingworld.com/helly-hansen-regatta-series-st-petersburg-2027/"
  },
  {
    "name": "Sunfish Florida Regional Championship I",
    "startDate": "2027-02-26",
    "endDate": "2027-02-28",
    "city": "Gulfport",
    "state": "FL",
    "organizer": "Boca Ciega Yacht Club Foundation / Sunfish Class Association",
    "discipline": "Sailing",
    "url": "https://www.sunfishclass.org/2027championship"
  },
  {
    "name": "Event #3 2027 Sarasota Viper Winter Series",
    "startDate": "2027-03-13",
    "city": "Sarasota",
    "state": "FL",
    "organizer": "Sarasota Sailing Squadron",
    "discipline": "Sailing",
    "url": "https://www.regattanetwork.com/mobile/mobile_event_list.php"
  },
  {
    "name": "Pot O' Gold SSS Regatta",
    "startDate": "2027-03-13",
    "city": "Sarasota",
    "state": "FL",
    "organizer": "Sarasota Sailing Squadron",
    "discipline": "Sailing",
    "url": "https://www.regattanetwork.com/mobile/mobile_event_list.php"
  },
  {
    "name": "Sunfish US Nationals",
    "startDate": "2027-03-17",
    "endDate": "2027-03-20",
    "city": "Pensacola",
    "state": "FL",
    "organizer": "Pensacola Yacht Club / Sunfish Class Association",
    "discipline": "Sailing",
    "url": "https://www.sunfishclass.org/2027championship"
  },
  {
    "name": "USA IOM Region 3 Championship",
    "startDate": "2027-03-19",
    "endDate": "2027-03-21",
    "city": "Columbia",
    "state": "SC",
    "organizer": "USA IOM National Class Association",
    "discipline": "Sailing",
    "url": "https://www.iomusa.org/upcoming-events"
  },
  {
    "name": "Sunfish International Masters",
    "startDate": "2027-03-22",
    "endDate": "2027-03-24",
    "city": "Pensacola",
    "state": "FL",
    "organizer": "Pensacola Yacht Club / Sunfish Class Association",
    "discipline": "Sailing",
    "url": "https://www.sunfishclass.org/2027championship"
  },
  {
    "name": "RS Aero North American Championships",
    "startDate": "2027-04-03",
    "endDate": "2027-04-05",
    "city": "Seattle",
    "state": "WA",
    "organizer": "Corinthian Yacht Club of Seattle / RS Aero Class Association",
    "discipline": "Sailing",
    "url": "https://www.rsaerosailing.org/index.asp?p=events&rg=North+America&yr=2027"
  },
  {
    "name": "Hill Country Multihull Regatta 2027",
    "startDate": "2027-04-17",
    "city": "Buchanan Dam",
    "state": "TX",
    "organizer": "HCANA and AustinCats Fleet 64",
    "discipline": "Sailing",
    "url": "https://www.regattanetwork.com/mobile/mobile_event_list.php"
  },
  {
    "name": "2027 Ficker Cup",
    "startDate": "2027-04-23",
    "city": "Long Beach",
    "state": "CA",
    "organizer": "Long Beach Yacht Club",
    "discipline": "Sailing",
    "url": "https://www.regattanetwork.com/mobile/mobile_event_list.php"
  },
  {
    "name": "62nd Congressional Cup",
    "startDate": "2027-04-28",
    "city": "Long Beach",
    "state": "CA",
    "organizer": "Long Beach Yacht Club",
    "discipline": "Sailing",
    "url": "https://www.regattanetwork.com/mobile/mobile_event_list.php"
  },
  {
    "name": "Helly Hansen Sailing World Regatta Series - Annapolis",
    "startDate": "2027-04-30",
    "endDate": "2027-05-02",
    "city": "Annapolis",
    "state": "MD",
    "organizer": "Annapolis Yacht Club / Sailing World",
    "discipline": "Sailing",
    "url": "https://www.sailingworld.com/regatta-series/"
  },
  {
    "name": "Sunfish Southeast Regional Championship #1",
    "startDate": "2027-05-15",
    "endDate": "2027-05-16",
    "city": "New Bern",
    "state": "NC",
    "organizer": "Blackbeard Sailing Club / Sunfish Class Association",
    "discipline": "Sailing",
    "url": "https://www.sunfishclass.org/2027championship"
  },
  {
    "name": "Helly Hansen Sailing World Regatta Series - Detroit",
    "startDate": "2027-06-04",
    "endDate": "2027-06-06",
    "city": "Detroit",
    "state": "MI",
    "organizer": "Bayview Yacht Club / Sailing World",
    "discipline": "Sailing",
    "url": "https://www.sailingworld.com/regatta-series/"
  },
  {
    "name": "Helly Hansen Sailing World Regatta Series - Chicago",
    "startDate": "2027-06-11",
    "endDate": "2027-06-13",
    "city": "Chicago",
    "state": "IL",
    "organizer": "Chicago Yacht Club / Sailing World",
    "discipline": "Sailing",
    "url": "https://www.sailingworld.com/regatta-series/"
  },
  {
    "name": "Block Island Race Week",
    "startDate": "2027-06-21",
    "endDate": "2027-06-25",
    "city": "Block Island",
    "state": "RI",
    "organizer": "Storm Trysail Club",
    "discipline": "Sailing",
    "url": "https://stormtrysail.org/"
  },
  {
    "name": "2027 Scudder Cup",
    "startDate": "2027-07-01",
    "city": "South Yarmouth",
    "state": "MA",
    "organizer": "Wianno Senior Class Association",
    "discipline": "Sailing",
    "url": "https://www.regattanetwork.com/mobile/mobile_event_list.php"
  },
  {
    "name": "Eastern Yachting Circuit 2027 Regatta",
    "startDate": "2027-07-08",
    "city": "Fair Haven",
    "state": "NY",
    "organizer": "Fair Haven Yacht Club",
    "discipline": "Sailing",
    "url": "https://www.regattanetwork.com/mobile/mobile_event_list.php"
  },
  {
    "name": "Helly Hansen Sailing World Regatta Series - Marblehead",
    "startDate": "2027-07-22",
    "endDate": "2027-07-25",
    "city": "Marblehead",
    "state": "MA",
    "organizer": "Eastern Yacht Club / Sailing World",
    "discipline": "Sailing",
    "url": "https://www.sailingworld.com/regatta-series/"
  },
  {
    "name": "37th Annual Juana Good Time Regatta",
    "startDate": "2027-09-10",
    "city": "Navarre Beach",
    "state": "FL",
    "organizer": "Juana's Pagodas & Sailors' Grill",
    "discipline": "Sailing",
    "url": "https://www.regattanetwork.com/mobile/mobile_event_list.php"
  },
  {
    "name": "USA IOM National Championship",
    "startDate": "2027-09-27",
    "endDate": "2027-09-29",
    "city": "San Diego",
    "state": "CA",
    "organizer": "San Diego Argonauts / USA IOM National Class Association",
    "discipline": "Sailing",
    "url": "https://www.iomusa.org/upcoming-events"
  },
  {
    "name": "Sunfish Southeast Regional Championship #2",
    "startDate": "2027-11-06",
    "endDate": "2027-11-07",
    "city": "Atlanta",
    "state": "GA",
    "organizer": "Atlanta Yacht Club / Sunfish Class Association",
    "discipline": "Sailing",
    "url": "https://www.sunfishclass.org/2027championship"
  },
  {
    "name": "ORC North American Championship",
    "startDate": "2027-11-14",
    "endDate": "2027-11-20",
    "city": "Fort Lauderdale",
    "state": "FL",
    "organizer": "Storm Trysail Club and Southern Ocean Racing Conference",
    "discipline": "Sailing",
    "url": "https://usmelges24.com/calendar"
  },
  {
    "name": "2027 UIM Jet Sprint World Championship Round 1",
    "startDate": "2027-08-07",
    "endDate": "2027-08-08",
    "city": "Port Angeles",
    "state": "WA",
    "organizer": "APBA / UIM",
    "discipline": "Powerboat racing",
    "url": "https://www.apba.org/news-united-states-awarded-2027-uim-jet-sprint-world-championship.html"
  },
  {
    "name": "2027 UIM Jet Sprint World Championship Round 2",
    "startDate": "2027-08-14",
    "endDate": "2027-08-15",
    "city": "Yakima",
    "state": "WA",
    "organizer": "APBA / UIM",
    "discipline": "Powerboat racing",
    "url": "https://www.apba.org/news-united-states-awarded-2027-uim-jet-sprint-world-championship.html"
  },
  {
    "name": "Orlando International Dragon Boat Festival",
    "startDate": "2026-10-17",
    "city": "Orlando",
    "state": "FL",
    "organizer": "GWN Dragon Boat",
    "discipline": "Dragon boat racing",
    "url": "https://gwndragonboat.com/event-calendar/"
  },
  {
    "name": "Madison County Chamber Dragon Boat Regatta",
    "startDate": "2027-04-24",
    "city": "Ridgeland",
    "state": "MS",
    "organizer": "GWN Dragon Boat",
    "discipline": "Dragon boat racing",
    "url": "https://gwndragonboat.com/event-calendar/"
  },
  {
    "name": "Sarasota International Dragon Boat Festival",
    "startDate": "2027-05-08",
    "city": "Sarasota",
    "state": "FL",
    "organizer": "GWN Dragon Boat",
    "discipline": "Dragon boat racing",
    "url": "https://gwndragonboat.com/event-calendar/"
  },
  {
    "name": "New York International Dragon Boat Festival",
    "startDate": "2027-07-10",
    "city": "New York",
    "state": "NY",
    "organizer": "GWN Dragon Boat",
    "discipline": "Dragon boat racing",
    "url": "https://gwndragonboat.com/event-calendar/"
  },
  {
    "name": "Chicago International Dragon Boat Festival",
    "startDate": "2027-07-24",
    "city": "Elk Grove Village",
    "state": "IL",
    "organizer": "GWN Dragon Boat",
    "discipline": "Dragon boat racing",
    "url": "https://gwndragonboat.com/festivals/chicago-international-dragon-boat-festival/"
  },
  {
    "name": "Las Vegas Dragon Boat Festival",
    "startDate": "2026-10-17",
    "city": "Las Vegas",
    "state": "NV",
    "organizer": "United States Dragon Boat Federation",
    "discipline": "Dragon boat racing",
    "url": "https://www.usdbf.org/events"
  },
  {
    "name": "Hernando Dragon Boat Festival",
    "startDate": "2026-11-07",
    "city": "Hernando",
    "state": "FL",
    "organizer": "United States Dragon Boat Federation",
    "discipline": "Dragon boat racing",
    "url": "https://www.usdbf.org/events"
  },
  {
    "name": "Inverness Dragon Boat Festival",
    "startDate": "2027-03-30",
    "city": "Inverness",
    "state": "FL",
    "organizer": "United States Dragon Boat Federation",
    "discipline": "Dragon boat racing",
    "url": "https://www.usdbf.org/events"
  },
  {
    "name": "USDBF Club Crew National Championships",
    "startDate": "2027-09-10",
    "endDate": "2027-09-12",
    "city": "Sarasota",
    "state": "FL",
    "organizer": "American Dragon Boat Association / USDBF",
    "discipline": "Dragon boat racing",
    "url": "https://americandragonboat.org/usdbf-announces-dates-for-2027-ccnc/"
  },
  {
    "name": "Bridge-to-Bridge Race",
    "startDate": "2027-01-02",
    "city": "Seattle",
    "state": "WA",
    "organizer": "Kent Dragon Boat Association",
    "discipline": "Dragon boat racing",
    "url": "https://www.kentdragonboat.com/events"
  },
  {
    "name": "Rainier Dragon Boat Festival",
    "startDate": "2027-05-15",
    "city": "Tacoma",
    "state": "WA",
    "organizer": "Kent Dragon Boat Association",
    "discipline": "Dragon boat racing",
    "url": "https://www.kentdragonboat.com/events"
  },
  {
    "name": "Seattle Dragon Boat Festival",
    "startDate": "2027-06-19",
    "city": "Seattle",
    "state": "WA",
    "organizer": "Kent Dragon Boat Association",
    "discipline": "Dragon boat racing",
    "url": "https://www.kentdragonboat.com/events"
  },
  {
    "name": "Salem World Beat Dragon Boat Festival",
    "startDate": "2027-06-26",
    "city": "Salem",
    "state": "OR",
    "organizer": "Kent Dragon Boat Association",
    "discipline": "Dragon boat racing",
    "url": "https://www.kentdragonboat.com/events"
  },
  {
    "name": "Paddle for Life",
    "startDate": "2027-08-07",
    "city": "Ridgefield",
    "state": "WA",
    "organizer": "Kent Dragon Boat Association",
    "discipline": "Dragon boat racing",
    "url": "https://www.kentdragonboat.com/events"
  },
  {
    "name": "Portland Dragon Boat Festival",
    "startDate": "2027-09-11",
    "endDate": "2027-09-12",
    "city": "Portland",
    "state": "OR",
    "organizer": "Kent Dragon Boat Association",
    "discipline": "Dragon boat racing",
    "url": "https://www.kentdragonboat.com/events"
  },
  {
    "name": "Key West Paddle Classic",
    "startDate": "2027-05-08",
    "city": "Key West",
    "state": "FL",
    "organizer": "Key West Paddle Classic",
    "discipline": "Kayak racing",
    "url": "https://www.totalsup.com/news/29th-key-west-paddle-classic-waterman-challenge-2026-sup-athlete-recap/"
  },
  {
    "name": "AuSable River Canoe Marathon",
    "startDate": "2027-07-24",
    "city": "Grayling",
    "state": "MI",
    "organizer": "AuSable River Canoe Marathon",
    "discipline": "Canoe racing",
    "url": "https://www.ausablecanoemarathon.org/"
  }
,

  {
    "name": "2027 Central Youth Championships",
    "startDate": "2027-04-30",
    "endDate": "2027-05-02",
    "city": "Oklahoma City",
    "state": "OK",
    "organizer": "USRowing",
    "discipline": "Rowing",
    "url": "https://usrowing.org/news/usrowing-announces-2027-and-2028-domestic-regatta-schedule"
  },
  {
    "name": "2027 Southwest Youth Championships",
    "startDate": "2027-04-30",
    "endDate": "2027-05-02",
    "city": "Gold River",
    "state": "CA",
    "organizer": "USRowing",
    "discipline": "Rowing",
    "url": "https://usrowing.org/news/usrowing-announces-2027-and-2028-domestic-regatta-schedule"
  },
  {
    "name": "2027 Mid-Atlantic Youth Championships",
    "startDate": "2027-05-08",
    "endDate": "2027-05-09",
    "city": "West Windsor",
    "state": "NJ",
    "organizer": "USRowing",
    "discipline": "Rowing",
    "url": "https://usrowing.org/news/usrowing-announces-2027-and-2028-domestic-regatta-schedule"
  },
  {
    "name": "2027 Southeast Youth Championships",
    "startDate": "2027-05-08",
    "endDate": "2027-05-09",
    "city": "Gainesville",
    "state": "GA",
    "organizer": "USRowing",
    "discipline": "Rowing",
    "url": "https://usrowing.org/news/usrowing-announces-2027-and-2028-domestic-regatta-schedule"
  },
  {
    "name": "2027 Northwest Youth Championships",
    "startDate": "2027-05-14",
    "endDate": "2027-05-16",
    "city": "Vancouver",
    "state": "WA",
    "organizer": "USRowing",
    "discipline": "Rowing",
    "url": "https://usrowing.org/news/usrowing-announces-2027-and-2028-domestic-regatta-schedule"
  },
  {
    "name": "2027 Northeast Youth Championships",
    "startDate": "2027-05-15",
    "endDate": "2027-05-16",
    "city": "Saratoga Springs",
    "state": "NY",
    "organizer": "USRowing",
    "discipline": "Rowing",
    "url": "https://usrowing.org/news/usrowing-announces-2027-and-2028-domestic-regatta-schedule"
  },
  {
    "name": "2027 Youth National Championships",
    "startDate": "2027-06-10",
    "endDate": "2027-06-13",
    "city": "Sarasota",
    "state": "FL",
    "organizer": "USRowing",
    "discipline": "Rowing",
    "url": "https://usrowing.org/news/usrowing-announces-2027-and-2028-domestic-regatta-schedule"
  },
  {
    "name": "2027 Youth Beach Sprint Championships",
    "startDate": "2027-06-14",
    "endDate": "2027-06-16",
    "city": "Sarasota",
    "state": "FL",
    "organizer": "USRowing",
    "discipline": "Rowing",
    "url": "https://usrowing.org/news/usrowing-announces-2027-and-2028-domestic-regatta-schedule"
  },
  {
    "name": "2027 Masters National Championships",
    "startDate": "2027-07-15",
    "endDate": "2027-07-18",
    "city": "Indianapolis",
    "state": "IN",
    "organizer": "USRowing",
    "discipline": "Rowing",
    "url": "https://usrowing.org/news/usrowing-announces-2027-and-2028-domestic-regatta-schedule"
  },
  {
    "name": "2028 Central Youth Championships",
    "startDate": "2028-05-05",
    "endDate": "2028-05-07",
    "city": "Oklahoma City",
    "state": "OK",
    "organizer": "USRowing",
    "discipline": "Rowing",
    "url": "https://usrowing.org/news/usrowing-announces-2027-and-2028-domestic-regatta-schedule"
  },
  {
    "name": "2028 Southwest Youth Championships",
    "startDate": "2028-05-05",
    "endDate": "2028-05-07",
    "city": "Gold River",
    "state": "CA",
    "organizer": "USRowing",
    "discipline": "Rowing",
    "url": "https://usrowing.org/news/usrowing-announces-2027-and-2028-domestic-regatta-schedule"
  },
  {
    "name": "2028 Mid-Atlantic Youth Championships",
    "startDate": "2028-05-13",
    "endDate": "2028-05-14",
    "city": "West Windsor",
    "state": "NJ",
    "organizer": "USRowing",
    "discipline": "Rowing",
    "url": "https://usrowing.org/news/usrowing-announces-2027-and-2028-domestic-regatta-schedule"
  },
  {
    "name": "2028 Southeast Youth Championships",
    "startDate": "2028-05-13",
    "endDate": "2028-05-14",
    "city": "Sarasota",
    "state": "FL",
    "organizer": "USRowing",
    "discipline": "Rowing",
    "url": "https://usrowing.org/news/usrowing-announces-2027-and-2028-domestic-regatta-schedule"
  },
  {
    "name": "2028 Northwest Youth Championships",
    "startDate": "2028-05-19",
    "endDate": "2028-05-21",
    "city": "Vancouver",
    "state": "WA",
    "organizer": "USRowing",
    "discipline": "Rowing",
    "url": "https://usrowing.org/news/usrowing-announces-2027-and-2028-domestic-regatta-schedule"
  },
  {
    "name": "2028 Northeast Youth Championships",
    "startDate": "2028-05-20",
    "endDate": "2028-05-21",
    "city": "Saratoga Springs",
    "state": "NY",
    "organizer": "USRowing",
    "discipline": "Rowing",
    "url": "https://usrowing.org/news/usrowing-announces-2027-and-2028-domestic-regatta-schedule"
  },
  {
    "name": "2028 Youth National Championships",
    "startDate": "2028-06-08",
    "endDate": "2028-06-11",
    "city": "Sarasota",
    "state": "FL",
    "organizer": "USRowing",
    "discipline": "Rowing",
    "url": "https://usrowing.org/news/usrowing-announces-2027-and-2028-domestic-regatta-schedule"
  },
  {
    "name": "2028 Youth Beach Sprint Championships",
    "startDate": "2028-06-12",
    "endDate": "2028-06-14",
    "city": "Sarasota",
    "state": "FL",
    "organizer": "USRowing",
    "discipline": "Rowing",
    "url": "https://usrowing.org/news/usrowing-announces-2027-and-2028-domestic-regatta-schedule"
  }

];

const stateNames:Record<string,string>={AL:"Alabama",AK:"Alaska",AZ:"Arizona",AR:"Arkansas",CA:"California",CO:"Colorado",CT:"Connecticut",DE:"Delaware",FL:"Florida",GA:"Georgia",ID:"Idaho",IL:"Illinois",IN:"Indiana",IA:"Iowa",KS:"Kansas",KY:"Kentucky",LA:"Louisiana",ME:"Maine",MD:"Maryland",MA:"Massachusetts",MI:"Michigan",MN:"Minnesota",MS:"Mississippi",MO:"Missouri",MT:"Montana",NE:"Nebraska",NV:"Nevada",NH:"New Hampshire",NJ:"New Jersey",NM:"New Mexico",NY:"New York",NC:"North Carolina",ND:"North Dakota",OH:"Ohio",OK:"Oklahoma",OR:"Oregon",PA:"Pennsylvania",RI:"Rhode Island",SC:"South Carolina",SD:"South Dakota",TN:"Tennessee",TX:"Texas",UT:"Utah",VT:"Vermont",VA:"Virginia",WA:"Washington",WV:"West Virginia",WI:"Wisconsin",WY:"Wyoming"};

function slugify(value:string){
  return value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"");
}

const seen=new Set<string>();
export const upcomingNational:RaceEvent[]=rawUpcoming
  .filter(event=>{
    const key=`${event.name.toLowerCase()}|${event.startDate}|${event.city.toLowerCase()}|${event.state.toLowerCase()}`;
    if(seen.has(key))return false;
    seen.add(key);
    return true;
  })
  .map(event=>{
    const sailing=event.discipline==="Sailing";
    const rowing=event.discipline==="Rowing";
    const motor=event.discipline==="Powerboat racing"||event.discipline==="Hydroplane racing";
    return {
      slug:`${slugify(event.name)}-${event.startDate.slice(0,4)}-${slugify(event.city)}`,
      name:event.name,
      sports:[event.discipline],
      eventTypes:sailing||rowing?["Regatta"]:motor?["Powerboat race"]:["Paddle race"],
      startDate:event.startDate,
      endDate:event.endDate,
      city:event.city,
      state:stateNames[event.state]||event.state,
      country:"United States",
      waterway:"",
      venue:"",
      organizer:event.organizer,
      audience:["Participant","Spectator"],
      officialUrl:event.url,
      status:"Confirmed",
      registrationStatus:"See official source",
      verifiedAt:"2026-10-11",
      summary:`Announced ${event.discipline.toLowerCase()} competition listed by ${event.organizer}.`,
      market:"National"
    };
  });
