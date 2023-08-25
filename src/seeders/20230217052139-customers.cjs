'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    const obj = [
      {
          "id": 1,
          "name": "Afghanistan",
          "iso3": "AFG",
          "iso2": "AF",
          "numeric_code": "004",
          "phone_code": "93",
          "capital": "Kabul",
          "currency": "AFN",
          "currency_symbol": "؋",
          "tld": ".af",
          "native": "افغانستان",
          "region": "Asia",
          "subregion": "Southern Asia",
          "timezones": [
              {
                  "zoneName": "Asia\/Kabul",
                  "gmtOffset": 16200,
                  "gmtOffsetName": "UTC+04:30",
                  "abbreviation": "AFT",
                  "tzName": "Afghanistan Time"
              }
          ]
      },
      {
          "id": 2,
          "name": "Aland Islands",
          "iso3": "ALA",
          "iso2": "AX",
          "numeric_code": "248",
          "phone_code": "+358-18",
          "capital": "Mariehamn",
          "currency": "EUR",
          "currency_symbol": "€",
          "tld": ".ax",
          "native": "Åland",
          "region": "Europe",
          "subregion": "Northern Europe",
          "timezones": [
              {
                  "zoneName": "Europe\/Mariehamn",
                  "gmtOffset": 7200,
                  "gmtOffsetName": "UTC+02:00",
                  "abbreviation": "EET",
                  "tzName": "Eastern European Time"
              }
          ]
      },
      {
          "id": 3,
          "name": "Albania",
          "iso3": "ALB",
          "iso2": "AL",
          "numeric_code": "008",
          "phone_code": "355",
          "capital": "Tirana",
          "currency": "ALL",
          "currency_symbol": "Lek",
          "tld": ".al",
          "native": "Shqipëria",
          "region": "Europe",
          "subregion": "Southern Europe",
          "timezones": [
              {
                  "zoneName": "Europe\/Tirane",
                  "gmtOffset": 3600,
                  "gmtOffsetName": "UTC+01:00",
                  "abbreviation": "CET",
                  "tzName": "Central European Time"
              }
          ]
      },
      {
          "id": 4,
          "name": "Algeria",
          "iso3": "DZA",
          "iso2": "DZ",
          "numeric_code": "012",
          "phone_code": "213",
          "capital": "Algiers",
          "currency": "DZD",
          "currency_symbol": "دج",
          "tld": ".dz",
          "native": "الجزائر",
          "region": "Africa",
          "subregion": "Northern Africa",
          "timezones": [
              {
                  "zoneName": "Africa\/Algiers",
                  "gmtOffset": 3600,
                  "gmtOffsetName": "UTC+01:00",
                  "abbreviation": "CET",
                  "tzName": "Central European Time"
              }
          ]
      },
      {
          "id": 5,
          "name": "American Samoa",
          "iso3": "ASM",
          "iso2": "AS",
          "numeric_code": "016",
          "phone_code": "+1-684",
          "capital": "Pago Pago",
          "currency": "USD",
          "currency_symbol": "$",
          "tld": ".as",
          "native": "American Samoa",
          "region": "Oceania",
          "subregion": "Polynesia",
          "timezones": [
              {
                  "zoneName": "Pacific\/Pago_Pago",
                  "gmtOffset": -39600,
                  "gmtOffsetName": "UTC-11:00",
                  "abbreviation": "SST",
                  "tzName": "Samoa Standard Time"
              }
          ]
      },
      {
          "id": 6,
          "name": "Andorra",
          "iso3": "AND",
          "iso2": "AD",
          "numeric_code": "020",
          "phone_code": "376",
          "capital": "Andorra la Vella",
          "currency": "EUR",
          "currency_symbol": "€",
          "tld": ".ad",
          "native": "Andorra",
          "region": "Europe",
          "subregion": "Southern Europe",
          "timezones": [
              {
                  "zoneName": "Europe\/Andorra",
                  "gmtOffset": 3600,
                  "gmtOffsetName": "UTC+01:00",
                  "abbreviation": "CET",
                  "tzName": "Central European Time"
              }
          ]
      },
      {
          "id": 7,
          "name": "Angola",
          "iso3": "AGO",
          "iso2": "AO",
          "numeric_code": "024",
          "phone_code": "244",
          "capital": "Luanda",
          "currency": "AOA",
          "currency_symbol": "Kz",
          "tld": ".ao",
          "native": "Angola",
          "region": "Africa",
          "subregion": "Middle Africa",
          "timezones": [
              {
                  "zoneName": "Africa\/Luanda",
                  "gmtOffset": 3600,
                  "gmtOffsetName": "UTC+01:00",
                  "abbreviation": "WAT",
                  "tzName": "West Africa Time"
              }
          ]
      },
      {
          "id": 8,
          "name": "Anguilla",
          "iso3": "AIA",
          "iso2": "AI",
          "numeric_code": "660",
          "phone_code": "+1-264",
          "capital": "The Valley",
          "currency": "XCD",
          "currency_symbol": "$",
          "tld": ".ai",
          "native": "Anguilla",
          "region": "Americas",
          "subregion": "Caribbean",
          "timezones": [
              {
                  "zoneName": "America\/Anguilla",
                  "gmtOffset": -14400,
                  "gmtOffsetName": "UTC-04:00",
                  "abbreviation": "AST",
                  "tzName": "Atlantic Standard Time"
              }
          ]
      },
      {
          "id": 9,
          "name": "Antarctica",
          "iso3": "ATA",
          "iso2": "AQ",
          "numeric_code": "010",
          "phone_code": "672",
          "capital": "",
          "currency": "AAD",
          "currency_symbol": "$",
          "tld": ".aq",
          "native": "Antarctica",
          "region": "Polar",
          "subregion": "Polar",
          "timezones": [
              {
                  "zoneName": "Antarctica\/Casey",
                  "gmtOffset": 39600,
                  "gmtOffsetName": "UTC+11:00",
                  "abbreviation": "AWST",
                  "tzName": "Australian Western Standard Time"
              },
              {
                  "zoneName": "Antarctica\/Davis",
                  "gmtOffset": 25200,
                  "gmtOffsetName": "UTC+07:00",
                  "abbreviation": "DAVT",
                  "tzName": "Davis Time"
              },
              {
                  "zoneName": "Antarctica\/DumontDUrville",
                  "gmtOffset": 36000,
                  "gmtOffsetName": "UTC+10:00",
                  "abbreviation": "DDUT",
                  "tzName": "Dumont d'Urville Time"
              },
              {
                  "zoneName": "Antarctica\/Mawson",
                  "gmtOffset": 18000,
                  "gmtOffsetName": "UTC+05:00",
                  "abbreviation": "MAWT",
                  "tzName": "Mawson Station Time"
              },
              {
                  "zoneName": "Antarctica\/McMurdo",
                  "gmtOffset": 46800,
                  "gmtOffsetName": "UTC+13:00",
                  "abbreviation": "NZDT",
                  "tzName": "New Zealand Daylight Time"
              },
              {
                  "zoneName": "Antarctica\/Palmer",
                  "gmtOffset": -10800,
                  "gmtOffsetName": "UTC-03:00",
                  "abbreviation": "CLST",
                  "tzName": "Chile Summer Time"
              },
              {
                  "zoneName": "Antarctica\/Rothera",
                  "gmtOffset": -10800,
                  "gmtOffsetName": "UTC-03:00",
                  "abbreviation": "ROTT",
                  "tzName": "Rothera Research Station Time"
              },
              {
                  "zoneName": "Antarctica\/Syowa",
                  "gmtOffset": 10800,
                  "gmtOffsetName": "UTC+03:00",
                  "abbreviation": "SYOT",
                  "tzName": "Showa Station Time"
              },
              {
                  "zoneName": "Antarctica\/Troll",
                  "gmtOffset": 0,
                  "gmtOffsetName": "UTC±00",
                  "abbreviation": "GMT",
                  "tzName": "Greenwich Mean Time"
              },
              {
                  "zoneName": "Antarctica\/Vostok",
                  "gmtOffset": 21600,
                  "gmtOffsetName": "UTC+06:00",
                  "abbreviation": "VOST",
                  "tzName": "Vostok Station Time"
              }
          ]
      },
      {
          "id": 10,
          "name": "Antigua And Barbuda",
          "iso3": "ATG",
          "iso2": "AG",
          "numeric_code": "028",
          "phone_code": "+1-268",
          "capital": "St. John's",
          "currency": "XCD",
          "currency_symbol": "$",
          "tld": ".ag",
          "native": "Antigua and Barbuda",
          "region": "Americas",
          "subregion": "Caribbean",
          "timezones": [
              {
                  "zoneName": "America\/Antigua",
                  "gmtOffset": -14400,
                  "gmtOffsetName": "UTC-04:00",
                  "abbreviation": "AST",
                  "tzName": "Atlantic Standard Time"
              }
          ]
      },
      {
          "id": 11,
          "name": "Argentina",
          "iso3": "ARG",
          "iso2": "AR",
          "numeric_code": "032",
          "phone_code": "54",
          "capital": "Buenos Aires",
          "currency": "ARS",
          "currency_symbol": "$",
          "tld": ".ar",
          "native": "Argentina",
          "region": "Americas",
          "subregion": "South America",
          "timezones": [
              {
                  "zoneName": "America\/Argentina\/Buenos_Aires",
                  "gmtOffset": -10800,
                  "gmtOffsetName": "UTC-03:00",
                  "abbreviation": "ART",
                  "tzName": "Argentina Time"
              },
              {
                  "zoneName": "America\/Argentina\/Catamarca",
                  "gmtOffset": -10800,
                  "gmtOffsetName": "UTC-03:00",
                  "abbreviation": "ART",
                  "tzName": "Argentina Time"
              },
              {
                  "zoneName": "America\/Argentina\/Cordoba",
                  "gmtOffset": -10800,
                  "gmtOffsetName": "UTC-03:00",
                  "abbreviation": "ART",
                  "tzName": "Argentina Time"
              },
              {
                  "zoneName": "America\/Argentina\/Jujuy",
                  "gmtOffset": -10800,
                  "gmtOffsetName": "UTC-03:00",
                  "abbreviation": "ART",
                  "tzName": "Argentina Time"
              },
              {
                  "zoneName": "America\/Argentina\/La_Rioja",
                  "gmtOffset": -10800,
                  "gmtOffsetName": "UTC-03:00",
                  "abbreviation": "ART",
                  "tzName": "Argentina Time"
              },
              {
                  "zoneName": "America\/Argentina\/Mendoza",
                  "gmtOffset": -10800,
                  "gmtOffsetName": "UTC-03:00",
                  "abbreviation": "ART",
                  "tzName": "Argentina Time"
              },
              {
                  "zoneName": "America\/Argentina\/Rio_Gallegos",
                  "gmtOffset": -10800,
                  "gmtOffsetName": "UTC-03:00",
                  "abbreviation": "ART",
                  "tzName": "Argentina Time"
              },
              {
                  "zoneName": "America\/Argentina\/Salta",
                  "gmtOffset": -10800,
                  "gmtOffsetName": "UTC-03:00",
                  "abbreviation": "ART",
                  "tzName": "Argentina Time"
              },
              {
                  "zoneName": "America\/Argentina\/San_Juan",
                  "gmtOffset": -10800,
                  "gmtOffsetName": "UTC-03:00",
                  "abbreviation": "ART",
                  "tzName": "Argentina Time"
              },
              {
                  "zoneName": "America\/Argentina\/San_Luis",
                  "gmtOffset": -10800,
                  "gmtOffsetName": "UTC-03:00",
                  "abbreviation": "ART",
                  "tzName": "Argentina Time"
              },
              {
                  "zoneName": "America\/Argentina\/Tucuman",
                  "gmtOffset": -10800,
                  "gmtOffsetName": "UTC-03:00",
                  "abbreviation": "ART",
                  "tzName": "Argentina Time"
              },
              {
                  "zoneName": "America\/Argentina\/Ushuaia",
                  "gmtOffset": -10800,
                  "gmtOffsetName": "UTC-03:00",
                  "abbreviation": "ART",
                  "tzName": "Argentina Time"
              }
          ]
      },
      {
          "id": 12,
          "name": "Armenia",
          "iso3": "ARM",
          "iso2": "AM",
          "numeric_code": "051",
          "phone_code": "374",
          "capital": "Yerevan",
          "currency": "AMD",
          "currency_symbol": "֏",
          "tld": ".am",
          "native": "Հայաստան",
          "region": "Asia",
          "subregion": "Western Asia",
          "timezones": [
              {
                  "zoneName": "Asia\/Yerevan",
                  "gmtOffset": 14400,
                  "gmtOffsetName": "UTC+04:00",
                  "abbreviation": "AMT",
                  "tzName": "Armenia Time"
              }
          ]
      },
      {
          "id": 13,
          "name": "Aruba",
          "iso3": "ABW",
          "iso2": "AW",
          "numeric_code": "533",
          "phone_code": "297",
          "capital": "Oranjestad",
          "currency": "AWG",
          "currency_symbol": "ƒ",
          "tld": ".aw",
          "native": "Aruba",
          "region": "Americas",
          "subregion": "Caribbean",
          "timezones": [
              {
                  "zoneName": "America\/Aruba",
                  "gmtOffset": -14400,
                  "gmtOffsetName": "UTC-04:00",
                  "abbreviation": "AST",
                  "tzName": "Atlantic Standard Time"
              }
          ]
      },
      {
          "id": 14,
          "name": "Australia",
          "iso3": "AUS",
          "iso2": "AU",
          "numeric_code": "036",
          "phone_code": "61",
          "capital": "Canberra",
          "currency": "AUD",
          "currency_symbol": "$",
          "tld": ".au",
          "native": "Australia",
          "region": "Oceania",
          "subregion": "Australia and New Zealand",
          "timezones": [
              {
                  "zoneName": "Antarctica\/Macquarie",
                  "gmtOffset": 39600,
                  "gmtOffsetName": "UTC+11:00",
                  "abbreviation": "MIST",
                  "tzName": "Macquarie Island Station Time"
              },
              {
                  "zoneName": "Australia\/Adelaide",
                  "gmtOffset": 37800,
                  "gmtOffsetName": "UTC+10:30",
                  "abbreviation": "ACDT",
                  "tzName": "Australian Central Daylight Saving Time"
              },
              {
                  "zoneName": "Australia\/Brisbane",
                  "gmtOffset": 36000,
                  "gmtOffsetName": "UTC+10:00",
                  "abbreviation": "AEST",
                  "tzName": "Australian Eastern Standard Time"
              },
              {
                  "zoneName": "Australia\/Broken_Hill",
                  "gmtOffset": 37800,
                  "gmtOffsetName": "UTC+10:30",
                  "abbreviation": "ACDT",
                  "tzName": "Australian Central Daylight Saving Time"
              },
              {
                  "zoneName": "Australia\/Currie",
                  "gmtOffset": 39600,
                  "gmtOffsetName": "UTC+11:00",
                  "abbreviation": "AEDT",
                  "tzName": "Australian Eastern Daylight Saving Time"
              },
              {
                  "zoneName": "Australia\/Darwin",
                  "gmtOffset": 34200,
                  "gmtOffsetName": "UTC+09:30",
                  "abbreviation": "ACST",
                  "tzName": "Australian Central Standard Time"
              },
              {
                  "zoneName": "Australia\/Eucla",
                  "gmtOffset": 31500,
                  "gmtOffsetName": "UTC+08:45",
                  "abbreviation": "ACWST",
                  "tzName": "Australian Central Western Standard Time (Unofficial)"
              },
              {
                  "zoneName": "Australia\/Hobart",
                  "gmtOffset": 39600,
                  "gmtOffsetName": "UTC+11:00",
                  "abbreviation": "AEDT",
                  "tzName": "Australian Eastern Daylight Saving Time"
              },
              {
                  "zoneName": "Australia\/Lindeman",
                  "gmtOffset": 36000,
                  "gmtOffsetName": "UTC+10:00",
                  "abbreviation": "AEST",
                  "tzName": "Australian Eastern Standard Time"
              },
              {
                  "zoneName": "Australia\/Lord_Howe",
                  "gmtOffset": 39600,
                  "gmtOffsetName": "UTC+11:00",
                  "abbreviation": "LHST",
                  "tzName": "Lord Howe Summer Time"
              },
              {
                  "zoneName": "Australia\/Melbourne",
                  "gmtOffset": 39600,
                  "gmtOffsetName": "UTC+11:00",
                  "abbreviation": "AEDT",
                  "tzName": "Australian Eastern Daylight Saving Time"
              },
              {
                  "zoneName": "Australia\/Perth",
                  "gmtOffset": 28800,
                  "gmtOffsetName": "UTC+08:00",
                  "abbreviation": "AWST",
                  "tzName": "Australian Western Standard Time"
              },
              {
                  "zoneName": "Australia\/Sydney",
                  "gmtOffset": 39600,
                  "gmtOffsetName": "UTC+11:00",
                  "abbreviation": "AEDT",
                  "tzName": "Australian Eastern Daylight Saving Time"
              }
          ]
      },
      {
          "id": 15,
          "name": "Austria",
          "iso3": "AUT",
          "iso2": "AT",
          "numeric_code": "040",
          "phone_code": "43",
          "capital": "Vienna",
          "currency": "EUR",
          "currency_symbol": "€",
          "tld": ".at",
          "native": "Österreich",
          "region": "Europe",
          "subregion": "Western Europe",
          "timezones": [
              {
                  "zoneName": "Europe\/Vienna",
                  "gmtOffset": 3600,
                  "gmtOffsetName": "UTC+01:00",
                  "abbreviation": "CET",
                  "tzName": "Central European Time"
              }
          ]
      },
      {
          "id": 16,
          "name": "Azerbaijan",
          "iso3": "AZE",
          "iso2": "AZ",
          "numeric_code": "031",
          "phone_code": "994",
          "capital": "Baku",
          "currency": "AZN",
          "currency_symbol": "m",
          "tld": ".az",
          "native": "Azərbaycan",
          "region": "Asia",
          "subregion": "Western Asia",
          "timezones": [
              {
                  "zoneName": "Asia\/Baku",
                  "gmtOffset": 14400,
                  "gmtOffsetName": "UTC+04:00",
                  "abbreviation": "AZT",
                  "tzName": "Azerbaijan Time"
              }
          ]
      },
      {
          "id": 17,
          "name": "Bahamas The",
          "iso3": "BHS",
          "iso2": "BS",
          "numeric_code": "044",
          "phone_code": "+1-242",
          "capital": "Nassau",
          "currency": "BSD",
          "currency_symbol": "B$",
          "tld": ".bs",
          "native": "Bahamas",
          "region": "Americas",
          "subregion": "Caribbean",
          "timezones": [
              {
                  "zoneName": "America\/Nassau",
                  "gmtOffset": -18000,
                  "gmtOffsetName": "UTC-05:00",
                  "abbreviation": "EST",
                  "tzName": "Eastern Standard Time (North America)"
              }
          ]
      },
      {
          "id": 18,
          "name": "Bahrain",
          "iso3": "BHR",
          "iso2": "BH",
          "numeric_code": "048",
          "phone_code": "973",
          "capital": "Manama",
          "currency": "BHD",
          "currency_symbol": ".د.ب",
          "tld": ".bh",
          "native": "‏البحرين",
          "region": "Asia",
          "subregion": "Western Asia",
          "timezones": [
              {
                  "zoneName": "Asia\/Bahrain",
                  "gmtOffset": 10800,
                  "gmtOffsetName": "UTC+03:00",
                  "abbreviation": "AST",
                  "tzName": "Arabia Standard Time"
              }
          ]
      },
      {
          "id": 19,
          "name": "Bangladesh",
          "iso3": "BGD",
          "iso2": "BD",
          "numeric_code": "050",
          "phone_code": "880",
          "capital": "Dhaka",
          "currency": "BDT",
          "currency_symbol": "৳",
          "tld": ".bd",
          "native": "Bangladesh",
          "region": "Asia",
          "subregion": "Southern Asia",
          "timezones": [
              {
                  "zoneName": "Asia\/Dhaka",
                  "gmtOffset": 21600,
                  "gmtOffsetName": "UTC+06:00",
                  "abbreviation": "BDT",
                  "tzName": "Bangladesh Standard Time"
              }
          ]
      },
      {
          "id": 20,
          "name": "Barbados",
          "iso3": "BRB",
          "iso2": "BB",
          "numeric_code": "052",
          "phone_code": "+1-246",
          "capital": "Bridgetown",
          "currency": "BBD",
          "currency_symbol": "Bds$",
          "tld": ".bb",
          "native": "Barbados",
          "region": "Americas",
          "subregion": "Caribbean",
          "timezones": [
              {
                  "zoneName": "America\/Barbados",
                  "gmtOffset": -14400,
                  "gmtOffsetName": "UTC-04:00",
                  "abbreviation": "AST",
                  "tzName": "Atlantic Standard Time"
              }
          ]
      },
      {
          "id": 21,
          "name": "Belarus",
          "iso3": "BLR",
          "iso2": "BY",
          "numeric_code": "112",
          "phone_code": "375",
          "capital": "Minsk",
          "currency": "BYN",
          "currency_symbol": "Br",
          "tld": ".by",
          "native": "Белару́сь",
          "region": "Europe",
          "subregion": "Eastern Europe",
          "timezones": [
              {
                  "zoneName": "Europe\/Minsk",
                  "gmtOffset": 10800,
                  "gmtOffsetName": "UTC+03:00",
                  "abbreviation": "MSK",
                  "tzName": "Moscow Time"
              }
          ]
      },
      {
          "id": 22,
          "name": "Belgium",
          "iso3": "BEL",
          "iso2": "BE",
          "numeric_code": "056",
          "phone_code": "32",
          "capital": "Brussels",
          "currency": "EUR",
          "currency_symbol": "€",
          "tld": ".be",
          "native": "België",
          "region": "Europe",
          "subregion": "Western Europe",
          "timezones": [
              {
                  "zoneName": "Europe\/Brussels",
                  "gmtOffset": 3600,
                  "gmtOffsetName": "UTC+01:00",
                  "abbreviation": "CET",
                  "tzName": "Central European Time"
              }
          ]
      },
      {
          "id": 23,
          "name": "Belize",
          "iso3": "BLZ",
          "iso2": "BZ",
          "numeric_code": "084",
          "phone_code": "501",
          "capital": "Belmopan",
          "currency": "BZD",
          "currency_symbol": "$",
          "tld": ".bz",
          "native": "Belize",
          "region": "Americas",
          "subregion": "Central America",
          "timezones": [
              {
                  "zoneName": "America\/Belize",
                  "gmtOffset": -21600,
                  "gmtOffsetName": "UTC-06:00",
                  "abbreviation": "CST",
                  "tzName": "Central Standard Time (North America)"
              }
          ]
      },
      {
          "id": 24,
          "name": "Benin",
          "iso3": "BEN",
          "iso2": "BJ",
          "numeric_code": "204",
          "phone_code": "229",
          "capital": "Porto-Novo",
          "currency": "XOF",
          "currency_symbol": "CFA",
          "tld": ".bj",
          "native": "Bénin",
          "region": "Africa",
          "subregion": "Western Africa",
          "timezones": [
              {
                  "zoneName": "Africa\/Porto-Novo",
                  "gmtOffset": 3600,
                  "gmtOffsetName": "UTC+01:00",
                  "abbreviation": "WAT",
                  "tzName": "West Africa Time"
              }
          ]
      },
      {
          "id": 25,
          "name": "Bermuda",
          "iso3": "BMU",
          "iso2": "BM",
          "numeric_code": "060",
          "phone_code": "+1-441",
          "capital": "Hamilton",
          "currency": "BMD",
          "currency_symbol": "$",
          "tld": ".bm",
          "native": "Bermuda",
          "region": "Americas",
          "subregion": "Northern America",
          "timezones": [
              {
                  "zoneName": "Atlantic\/Bermuda",
                  "gmtOffset": -14400,
                  "gmtOffsetName": "UTC-04:00",
                  "abbreviation": "AST",
                  "tzName": "Atlantic Standard Time"
              }
          ]
      },
      {
          "id": 26,
          "name": "Bhutan",
          "iso3": "BTN",
          "iso2": "BT",
          "numeric_code": "064",
          "phone_code": "975",
          "capital": "Thimphu",
          "currency": "BTN",
          "currency_symbol": "Nu.",
          "tld": ".bt",
          "native": "ʼbrug-yul",
          "region": "Asia",
          "subregion": "Southern Asia",
          "timezones": [
              {
                  "zoneName": "Asia\/Thimphu",
                  "gmtOffset": 21600,
                  "gmtOffsetName": "UTC+06:00",
                  "abbreviation": "BTT",
                  "tzName": "Bhutan Time"
              }
          ]
      },
      {
          "id": 27,
          "name": "Bolivia",
          "iso3": "BOL",
          "iso2": "BO",
          "numeric_code": "068",
          "phone_code": "591",
          "capital": "Sucre",
          "currency": "BOB",
          "currency_symbol": "Bs.",
          "tld": ".bo",
          "native": "Bolivia",
          "region": "Americas",
          "subregion": "South America",
          "timezones": [
              {
                  "zoneName": "America\/La_Paz",
                  "gmtOffset": -14400,
                  "gmtOffsetName": "UTC-04:00",
                  "abbreviation": "BOT",
                  "tzName": "Bolivia Time"
              }
          ]
      },
      {
          "id": 155,
          "name": "Bonaire, Sint Eustatius and Saba",
          "iso3": "BES",
          "iso2": "BQ",
          "numeric_code": "535",
          "phone_code": "599",
          "capital": "Kralendijk",
          "currency": "USD",
          "currency_symbol": "$",
          "tld": ".an",
          "native": "Caribisch Nederland",
          "region": "Americas",
          "subregion": "Caribbean",
          "timezones": [
              {
                  "zoneName": "America\/Anguilla",
                  "gmtOffset": -14400,
                  "gmtOffsetName": "UTC-04:00",
                  "abbreviation": "AST",
                  "tzName": "Atlantic Standard Time"
              }
          ]
      },
      {
          "id": 28,
          "name": "Bosnia and Herzegovina",
          "iso3": "BIH",
          "iso2": "BA",
          "numeric_code": "070",
          "phone_code": "387",
          "capital": "Sarajevo",
          "currency": "BAM",
          "currency_symbol": "KM",
          "tld": ".ba",
          "native": "Bosna i Hercegovina",
          "region": "Europe",
          "subregion": "Southern Europe",
          "timezones": [
              {
                  "zoneName": "Europe\/Sarajevo",
                  "gmtOffset": 3600,
                  "gmtOffsetName": "UTC+01:00",
                  "abbreviation": "CET",
                  "tzName": "Central European Time"
              }
          ]
      },
      {
          "id": 29,
          "name": "Botswana",
          "iso3": "BWA",
          "iso2": "BW",
          "numeric_code": "072",
          "phone_code": "267",
          "capital": "Gaborone",
          "currency": "BWP",
          "currency_symbol": "P",
          "tld": ".bw",
          "native": "Botswana",
          "region": "Africa",
          "subregion": "Southern Africa",
          "timezones": [
              {
                  "zoneName": "Africa\/Gaborone",
                  "gmtOffset": 7200,
                  "gmtOffsetName": "UTC+02:00",
                  "abbreviation": "CAT",
                  "tzName": "Central Africa Time"
              }
          ]
      },
      {
          "id": 30,
          "name": "Bouvet Island",
          "iso3": "BVT",
          "iso2": "BV",
          "numeric_code": "074",
          "phone_code": "0055",
          "capital": "",
          "currency": "NOK",
          "currency_symbol": "kr",
          "tld": ".bv",
          "native": "Bouvetøya",
          "region": "Polar",
          "subregion": "Polar",
          "timezones": [
              {
                  "zoneName": "Europe\/Oslo",
                  "gmtOffset": 3600,
                  "gmtOffsetName": "UTC+01:00",
                  "abbreviation": "CET",
                  "tzName": "Central European Time"
              }
          ]
      },
      {
          "id": 31,
          "name": "Brazil",
          "iso3": "BRA",
          "iso2": "BR",
          "numeric_code": "076",
          "phone_code": "55",
          "capital": "Brasilia",
          "currency": "BRL",
          "currency_symbol": "R$",
          "tld": ".br",
          "native": "Brasil",
          "region": "Americas",
          "subregion": "South America",
          "timezones": [
              {
                  "zoneName": "America\/Araguaina",
                  "gmtOffset": -10800,
                  "gmtOffsetName": "UTC-03:00",
                  "abbreviation": "BRT",
                  "tzName": "Brasília Time"
              },
              {
                  "zoneName": "America\/Bahia",
                  "gmtOffset": -10800,
                  "gmtOffsetName": "UTC-03:00",
                  "abbreviation": "BRT",
                  "tzName": "Brasília Time"
              },
              {
                  "zoneName": "America\/Belem",
                  "gmtOffset": -10800,
                  "gmtOffsetName": "UTC-03:00",
                  "abbreviation": "BRT",
                  "tzName": "Brasília Time"
              },
              {
                  "zoneName": "America\/Boa_Vista",
                  "gmtOffset": -14400,
                  "gmtOffsetName": "UTC-04:00",
                  "abbreviation": "AMT",
                  "tzName": "Amazon Time (Brazil)3"
              },
              {
                  "zoneName": "America\/Campo_Grande",
                  "gmtOffset": -14400,
                  "gmtOffsetName": "UTC-04:00",
                  "abbreviation": "AMT",
                  "tzName": "Amazon Time (Brazil)3"
              },
              {
                  "zoneName": "America\/Cuiaba",
                  "gmtOffset": -14400,
                  "gmtOffsetName": "UTC-04:00",
                  "abbreviation": "BRT",
                  "tzName": "Brasilia Time"
              },
              {
                  "zoneName": "America\/Eirunepe",
                  "gmtOffset": -18000,
                  "gmtOffsetName": "UTC-05:00",
                  "abbreviation": "ACT",
                  "tzName": "Acre Time"
              },
              {
                  "zoneName": "America\/Fortaleza",
                  "gmtOffset": -10800,
                  "gmtOffsetName": "UTC-03:00",
                  "abbreviation": "BRT",
                  "tzName": "Brasília Time"
              },
              {
                  "zoneName": "America\/Maceio",
                  "gmtOffset": -10800,
                  "gmtOffsetName": "UTC-03:00",
                  "abbreviation": "BRT",
                  "tzName": "Brasília Time"
              },
              {
                  "zoneName": "America\/Manaus",
                  "gmtOffset": -14400,
                  "gmtOffsetName": "UTC-04:00",
                  "abbreviation": "AMT",
                  "tzName": "Amazon Time (Brazil)"
              },
              {
                  "zoneName": "America\/Noronha",
                  "gmtOffset": -7200,
                  "gmtOffsetName": "UTC-02:00",
                  "abbreviation": "FNT",
                  "tzName": "Fernando de Noronha Time"
              },
              {
                  "zoneName": "America\/Porto_Velho",
                  "gmtOffset": -14400,
                  "gmtOffsetName": "UTC-04:00",
                  "abbreviation": "AMT",
                  "tzName": "Amazon Time (Brazil)3"
              },
              {
                  "zoneName": "America\/Recife",
                  "gmtOffset": -10800,
                  "gmtOffsetName": "UTC-03:00",
                  "abbreviation": "BRT",
                  "tzName": "Brasília Time"
              },
              {
                  "zoneName": "America\/Rio_Branco",
                  "gmtOffset": -18000,
                  "gmtOffsetName": "UTC-05:00",
                  "abbreviation": "ACT",
                  "tzName": "Acre Time"
              },
              {
                  "zoneName": "America\/Santarem",
                  "gmtOffset": -10800,
                  "gmtOffsetName": "UTC-03:00",
                  "abbreviation": "BRT",
                  "tzName": "Brasília Time"
              },
              {
                  "zoneName": "America\/Sao_Paulo",
                  "gmtOffset": -10800,
                  "gmtOffsetName": "UTC-03:00",
                  "abbreviation": "BRT",
                  "tzName": "Brasília Time"
              }
          ]
      },
      {
          "id": 32,
          "name": "British Indian Ocean Territory",
          "iso3": "IOT",
          "iso2": "IO",
          "numeric_code": "086",
          "phone_code": "246",
          "capital": "Diego Garcia",
          "currency": "USD",
          "currency_symbol": "$",
          "tld": ".io",
          "native": "British Indian Ocean Territory",
          "region": "Africa",
          "subregion": "Eastern Africa",
          "timezones": [
              {
                  "zoneName": "Indian\/Chagos",
                  "gmtOffset": 21600,
                  "gmtOffsetName": "UTC+06:00",
                  "abbreviation": "IOT",
                  "tzName": "Indian Ocean Time"
              }
          ]
      },
      {
          "id": 33,
          "name": "Brunei",
          "iso3": "BRN",
          "iso2": "BN",
          "numeric_code": "096",
          "phone_code": "673",
          "capital": "Bandar Seri Begawan",
          "currency": "BND",
          "currency_symbol": "B$",
          "tld": ".bn",
          "native": "Negara Brunei Darussalam",
          "region": "Asia",
          "subregion": "South-Eastern Asia",
          "timezones": [
              {
                  "zoneName": "Asia\/Brunei",
                  "gmtOffset": 28800,
                  "gmtOffsetName": "UTC+08:00",
                  "abbreviation": "BNT",
                  "tzName": "Brunei Darussalam Time"
              }
          ]
      },
      {
          "id": 34,
          "name": "Bulgaria",
          "iso3": "BGR",
          "iso2": "BG",
          "numeric_code": "100",
          "phone_code": "359",
          "capital": "Sofia",
          "currency": "BGN",
          "currency_symbol": "Лв.",
          "tld": ".bg",
          "native": "България",
          "region": "Europe",
          "subregion": "Eastern Europe",
          "timezones": [
              {
                  "zoneName": "Europe\/Sofia",
                  "gmtOffset": 7200,
                  "gmtOffsetName": "UTC+02:00",
                  "abbreviation": "EET",
                  "tzName": "Eastern European Time"
              }
          ]
      },
      {
          "id": 35,
          "name": "Burkina Faso",
          "iso3": "BFA",
          "iso2": "BF",
          "numeric_code": "854",
          "phone_code": "226",
          "capital": "Ouagadougou",
          "currency": "XOF",
          "currency_symbol": "CFA",
          "tld": ".bf",
          "native": "Burkina Faso",
          "region": "Africa",
          "subregion": "Western Africa",
          "timezones": [
              {
                  "zoneName": "Africa\/Ouagadougou",
                  "gmtOffset": 0,
                  "gmtOffsetName": "UTC±00",
                  "abbreviation": "GMT",
                  "tzName": "Greenwich Mean Time"
              }
          ]
      },
      {
          "id": 36,
          "name": "Burundi",
          "iso3": "BDI",
          "iso2": "BI",
          "numeric_code": "108",
          "phone_code": "257",
          "capital": "Bujumbura",
          "currency": "BIF",
          "currency_symbol": "FBu",
          "tld": ".bi",
          "native": "Burundi",
          "region": "Africa",
          "subregion": "Eastern Africa",
          "timezones": [
              {
                  "zoneName": "Africa\/Bujumbura",
                  "gmtOffset": 7200,
                  "gmtOffsetName": "UTC+02:00",
                  "abbreviation": "CAT",
                  "tzName": "Central Africa Time"
              }
          ]
      },
      {
          "id": 37,
          "name": "Cambodia",
          "iso3": "KHM",
          "iso2": "KH",
          "numeric_code": "116",
          "phone_code": "855",
          "capital": "Phnom Penh",
          "currency": "KHR",
          "currency_symbol": "KHR",
          "tld": ".kh",
          "native": "Kâmpŭchéa",
          "region": "Asia",
          "subregion": "South-Eastern Asia",
          "timezones": [
              {
                  "zoneName": "Asia\/Phnom_Penh",
                  "gmtOffset": 25200,
                  "gmtOffsetName": "UTC+07:00",
                  "abbreviation": "ICT",
                  "tzName": "Indochina Time"
              }
          ]
      },
      {
          "id": 38,
          "name": "Cameroon",
          "iso3": "CMR",
          "iso2": "CM",
          "numeric_code": "120",
          "phone_code": "237",
          "capital": "Yaounde",
          "currency": "XAF",
          "currency_symbol": "FCFA",
          "tld": ".cm",
          "native": "Cameroon",
          "region": "Africa",
          "subregion": "Middle Africa",
          "timezones": [
              {
                  "zoneName": "Africa\/Douala",
                  "gmtOffset": 3600,
                  "gmtOffsetName": "UTC+01:00",
                  "abbreviation": "WAT",
                  "tzName": "West Africa Time"
              }
          ]
      },
      {
          "id": 39,
          "name": "Canada",
          "iso3": "CAN",
          "iso2": "CA",
          "numeric_code": "124",
          "phone_code": "1",
          "capital": "Ottawa",
          "currency": "CAD",
          "currency_symbol": "$",
          "tld": ".ca",
          "native": "Canada",
          "region": "Americas",
          "subregion": "Northern America",
          "timezones": [
              {
                  "zoneName": "America\/Atikokan",
                  "gmtOffset": -18000,
                  "gmtOffsetName": "UTC-05:00",
                  "abbreviation": "EST",
                  "tzName": "Eastern Standard Time (North America)"
              },
              {
                  "zoneName": "America\/Blanc-Sablon",
                  "gmtOffset": -14400,
                  "gmtOffsetName": "UTC-04:00",
                  "abbreviation": "AST",
                  "tzName": "Atlantic Standard Time"
              },
              {
                  "zoneName": "America\/Cambridge_Bay",
                  "gmtOffset": -25200,
                  "gmtOffsetName": "UTC-07:00",
                  "abbreviation": "MST",
                  "tzName": "Mountain Standard Time (North America)"
              },
              {
                  "zoneName": "America\/Creston",
                  "gmtOffset": -25200,
                  "gmtOffsetName": "UTC-07:00",
                  "abbreviation": "MST",
                  "tzName": "Mountain Standard Time (North America)"
              },
              {
                  "zoneName": "America\/Dawson",
                  "gmtOffset": -25200,
                  "gmtOffsetName": "UTC-07:00",
                  "abbreviation": "MST",
                  "tzName": "Mountain Standard Time (North America)"
              },
              {
                  "zoneName": "America\/Dawson_Creek",
                  "gmtOffset": -25200,
                  "gmtOffsetName": "UTC-07:00",
                  "abbreviation": "MST",
                  "tzName": "Mountain Standard Time (North America)"
              },
              {
                  "zoneName": "America\/Edmonton",
                  "gmtOffset": -25200,
                  "gmtOffsetName": "UTC-07:00",
                  "abbreviation": "MST",
                  "tzName": "Mountain Standard Time (North America)"
              },
              {
                  "zoneName": "America\/Fort_Nelson",
                  "gmtOffset": -25200,
                  "gmtOffsetName": "UTC-07:00",
                  "abbreviation": "MST",
                  "tzName": "Mountain Standard Time (North America)"
              },
              {
                  "zoneName": "America\/Glace_Bay",
                  "gmtOffset": -14400,
                  "gmtOffsetName": "UTC-04:00",
                  "abbreviation": "AST",
                  "tzName": "Atlantic Standard Time"
              },
              {
                  "zoneName": "America\/Goose_Bay",
                  "gmtOffset": -14400,
                  "gmtOffsetName": "UTC-04:00",
                  "abbreviation": "AST",
                  "tzName": "Atlantic Standard Time"
              },
              {
                  "zoneName": "America\/Halifax",
                  "gmtOffset": -14400,
                  "gmtOffsetName": "UTC-04:00",
                  "abbreviation": "AST",
                  "tzName": "Atlantic Standard Time"
              },
              {
                  "zoneName": "America\/Inuvik",
                  "gmtOffset": -25200,
                  "gmtOffsetName": "UTC-07:00",
                  "abbreviation": "MST",
                  "tzName": "Mountain Standard Time (North America"
              },
              {
                  "zoneName": "America\/Iqaluit",
                  "gmtOffset": -18000,
                  "gmtOffsetName": "UTC-05:00",
                  "abbreviation": "EST",
                  "tzName": "Eastern Standard Time (North America"
              },
              {
                  "zoneName": "America\/Moncton",
                  "gmtOffset": -14400,
                  "gmtOffsetName": "UTC-04:00",
                  "abbreviation": "AST",
                  "tzName": "Atlantic Standard Time"
              },
              {
                  "zoneName": "America\/Nipigon",
                  "gmtOffset": -18000,
                  "gmtOffsetName": "UTC-05:00",
                  "abbreviation": "EST",
                  "tzName": "Eastern Standard Time (North America"
              },
              {
                  "zoneName": "America\/Pangnirtung",
                  "gmtOffset": -18000,
                  "gmtOffsetName": "UTC-05:00",
                  "abbreviation": "EST",
                  "tzName": "Eastern Standard Time (North America"
              },
              {
                  "zoneName": "America\/Rainy_River",
                  "gmtOffset": -21600,
                  "gmtOffsetName": "UTC-06:00",
                  "abbreviation": "CST",
                  "tzName": "Central Standard Time (North America"
              },
              {
                  "zoneName": "America\/Rankin_Inlet",
                  "gmtOffset": -21600,
                  "gmtOffsetName": "UTC-06:00",
                  "abbreviation": "CST",
                  "tzName": "Central Standard Time (North America"
              },
              {
                  "zoneName": "America\/Regina",
                  "gmtOffset": -21600,
                  "gmtOffsetName": "UTC-06:00",
                  "abbreviation": "CST",
                  "tzName": "Central Standard Time (North America"
              },
              {
                  "zoneName": "America\/Resolute",
                  "gmtOffset": -21600,
                  "gmtOffsetName": "UTC-06:00",
                  "abbreviation": "CST",
                  "tzName": "Central Standard Time (North America"
              },
              {
                  "zoneName": "America\/St_Johns",
                  "gmtOffset": -12600,
                  "gmtOffsetName": "UTC-03:30",
                  "abbreviation": "NST",
                  "tzName": "Newfoundland Standard Time"
              },
              {
                  "zoneName": "America\/Swift_Current",
                  "gmtOffset": -21600,
                  "gmtOffsetName": "UTC-06:00",
                  "abbreviation": "CST",
                  "tzName": "Central Standard Time (North America"
              },
              {
                  "zoneName": "America\/Thunder_Bay",
                  "gmtOffset": -18000,
                  "gmtOffsetName": "UTC-05:00",
                  "abbreviation": "EST",
                  "tzName": "Eastern Standard Time (North America"
              },
              {
                  "zoneName": "America\/Toronto",
                  "gmtOffset": -18000,
                  "gmtOffsetName": "UTC-05:00",
                  "abbreviation": "EST",
                  "tzName": "Eastern Standard Time (North America"
              },
              {
                  "zoneName": "America\/Vancouver",
                  "gmtOffset": -28800,
                  "gmtOffsetName": "UTC-08:00",
                  "abbreviation": "PST",
                  "tzName": "Pacific Standard Time (North America"
              },
              {
                  "zoneName": "America\/Whitehorse",
                  "gmtOffset": -25200,
                  "gmtOffsetName": "UTC-07:00",
                  "abbreviation": "MST",
                  "tzName": "Mountain Standard Time (North America"
              },
              {
                  "zoneName": "America\/Winnipeg",
                  "gmtOffset": -21600,
                  "gmtOffsetName": "UTC-06:00",
                  "abbreviation": "CST",
                  "tzName": "Central Standard Time (North America"
              },
              {
                  "zoneName": "America\/Yellowknife",
                  "gmtOffset": -25200,
                  "gmtOffsetName": "UTC-07:00",
                  "abbreviation": "MST",
                  "tzName": "Mountain Standard Time (North America"
              }
          ]
      },
      {
          "id": 40,
          "name": "Cape Verde",
          "iso3": "CPV",
          "iso2": "CV",
          "numeric_code": "132",
          "phone_code": "238",
          "capital": "Praia",
          "currency": "CVE",
          "currency_symbol": "$",
          "tld": ".cv",
          "native": "Cabo Verde",
          "region": "Africa",
          "subregion": "Western Africa",
          "timezones": [
              {
                  "zoneName": "Atlantic\/Cape_Verde",
                  "gmtOffset": -3600,
                  "gmtOffsetName": "UTC-01:00",
                  "abbreviation": "CVT",
                  "tzName": "Cape Verde Time"
              }
          ]
      },
      {
          "id": 41,
          "name": "Cayman Islands",
          "iso3": "CYM",
          "iso2": "KY",
          "numeric_code": "136",
          "phone_code": "+1-345",
          "capital": "George Town",
          "currency": "KYD",
          "currency_symbol": "$",
          "tld": ".ky",
          "native": "Cayman Islands",
          "region": "Americas",
          "subregion": "Caribbean",
          "timezones": [
              {
                  "zoneName": "America\/Cayman",
                  "gmtOffset": -18000,
                  "gmtOffsetName": "UTC-05:00",
                  "abbreviation": "EST",
                  "tzName": "Eastern Standard Time (North America"
              }
          ]
      },
      {
          "id": 42,
          "name": "Central African Republic",
          "iso3": "CAF",
          "iso2": "CF",
          "numeric_code": "140",
          "phone_code": "236",
          "capital": "Bangui",
          "currency": "XAF",
          "currency_symbol": "FCFA",
          "tld": ".cf",
          "native": "Ködörösêse tî Bêafrîka",
          "region": "Africa",
          "subregion": "Middle Africa",
          "timezones": [
              {
                  "zoneName": "Africa\/Bangui",
                  "gmtOffset": 3600,
                  "gmtOffsetName": "UTC+01:00",
                  "abbreviation": "WAT",
                  "tzName": "West Africa Time"
              }
          ]
      },
      {
          "id": 43,
          "name": "Chad",
          "iso3": "TCD",
          "iso2": "TD",
          "numeric_code": "148",
          "phone_code": "235",
          "capital": "N'Djamena",
          "currency": "XAF",
          "currency_symbol": "FCFA",
          "tld": ".td",
          "native": "Tchad",
          "region": "Africa",
          "subregion": "Middle Africa",
          "timezones": [
              {
                  "zoneName": "Africa\/Ndjamena",
                  "gmtOffset": 3600,
                  "gmtOffsetName": "UTC+01:00",
                  "abbreviation": "WAT",
                  "tzName": "West Africa Time"
              }
          ]
      },
      {
          "id": 44,
          "name": "Chile",
          "iso3": "CHL",
          "iso2": "CL",
          "numeric_code": "152",
          "phone_code": "56",
          "capital": "Santiago",
          "currency": "CLP",
          "currency_symbol": "$",
          "tld": ".cl",
          "native": "Chile",
          "region": "Americas",
          "subregion": "South America",
          "timezones": [
              {
                  "zoneName": "America\/Punta_Arenas",
                  "gmtOffset": -10800,
                  "gmtOffsetName": "UTC-03:00",
                  "abbreviation": "CLST",
                  "tzName": "Chile Summer Time"
              },
              {
                  "zoneName": "America\/Santiago",
                  "gmtOffset": -10800,
                  "gmtOffsetName": "UTC-03:00",
                  "abbreviation": "CLST",
                  "tzName": "Chile Summer Time"
              },
              {
                  "zoneName": "Pacific\/Easter",
                  "gmtOffset": -18000,
                  "gmtOffsetName": "UTC-05:00",
                  "abbreviation": "EASST",
                  "tzName": "Easter Island Summer Time"
              }
          ]
      },
      {
          "id": 45,
          "name": "China",
          "iso3": "CHN",
          "iso2": "CN",
          "numeric_code": "156",
          "phone_code": "86",
          "capital": "Beijing",
          "currency": "CNY",
          "currency_symbol": "¥",
          "tld": ".cn",
          "native": "中国",
          "region": "Asia",
          "subregion": "Eastern Asia",
          "timezones": [
              {
                  "zoneName": "Asia\/Shanghai",
                  "gmtOffset": 28800,
                  "gmtOffsetName": "UTC+08:00",
                  "abbreviation": "CST",
                  "tzName": "China Standard Time"
              },
              {
                  "zoneName": "Asia\/Urumqi",
                  "gmtOffset": 21600,
                  "gmtOffsetName": "UTC+06:00",
                  "abbreviation": "XJT",
                  "tzName": "China Standard Time"
              }
          ]
      },
      {
          "id": 46,
          "name": "Christmas Island",
          "iso3": "CXR",
          "iso2": "CX",
          "numeric_code": "162",
          "phone_code": "61",
          "capital": "Flying Fish Cove",
          "currency": "AUD",
          "currency_symbol": "$",
          "tld": ".cx",
          "native": "Christmas Island",
          "region": "Oceania",
          "subregion": "Australia and New Zealand",
          "timezones": [
              {
                  "zoneName": "Indian\/Christmas",
                  "gmtOffset": 25200,
                  "gmtOffsetName": "UTC+07:00",
                  "abbreviation": "CXT",
                  "tzName": "Christmas Island Time"
              }
          ]
      },
      {
          "id": 47,
          "name": "Cocos (Keeling) Islands",
          "iso3": "CCK",
          "iso2": "CC",
          "numeric_code": "166",
          "phone_code": "61",
          "capital": "West Island",
          "currency": "AUD",
          "currency_symbol": "$",
          "tld": ".cc",
          "native": "Cocos (Keeling) Islands",
          "region": "Oceania",
          "subregion": "Australia and New Zealand",
          "timezones": [
              {
                  "zoneName": "Indian\/Cocos",
                  "gmtOffset": 23400,
                  "gmtOffsetName": "UTC+06:30",
                  "abbreviation": "CCT",
                  "tzName": "Cocos Islands Time"
              }
          ]
      },
      {
          "id": 48,
          "name": "Colombia",
          "iso3": "COL",
          "iso2": "CO",
          "numeric_code": "170",
          "phone_code": "57",
          "capital": "Bogota",
          "currency": "COP",
          "currency_symbol": "$",
          "tld": ".co",
          "native": "Colombia",
          "region": "Americas",
          "subregion": "South America",
          "timezones": [
              {
                  "zoneName": "America\/Bogota",
                  "gmtOffset": -18000,
                  "gmtOffsetName": "UTC-05:00",
                  "abbreviation": "COT",
                  "tzName": "Colombia Time"
              }
          ]
      },
      {
          "id": 49,
          "name": "Comoros",
          "iso3": "COM",
          "iso2": "KM",
          "numeric_code": "174",
          "phone_code": "269",
          "capital": "Moroni",
          "currency": "KMF",
          "currency_symbol": "CF",
          "tld": ".km",
          "native": "Komori",
          "region": "Africa",
          "subregion": "Eastern Africa",
          "timezones": [
              {
                  "zoneName": "Indian\/Comoro",
                  "gmtOffset": 10800,
                  "gmtOffsetName": "UTC+03:00",
                  "abbreviation": "EAT",
                  "tzName": "East Africa Time"
              }
          ]
      },
      {
          "id": 50,
          "name": "Congo",
          "iso3": "COG",
          "iso2": "CG",
          "numeric_code": "178",
          "phone_code": "242",
          "capital": "Brazzaville",
          "currency": "XAF",
          "currency_symbol": "FC",
          "tld": ".cg",
          "native": "République du Congo",
          "region": "Africa",
          "subregion": "Middle Africa",
          "timezones": [
              {
                  "zoneName": "Africa\/Brazzaville",
                  "gmtOffset": 3600,
                  "gmtOffsetName": "UTC+01:00",
                  "abbreviation": "WAT",
                  "tzName": "West Africa Time"
              }
          ]
      },
      {
          "id": 52,
          "name": "Cook Islands",
          "iso3": "COK",
          "iso2": "CK",
          "numeric_code": "184",
          "phone_code": "682",
          "capital": "Avarua",
          "currency": "NZD",
          "currency_symbol": "$",
          "tld": ".ck",
          "native": "Cook Islands",
          "region": "Oceania",
          "subregion": "Polynesia",
          "timezones": [
              {
                  "zoneName": "Pacific\/Rarotonga",
                  "gmtOffset": -36000,
                  "gmtOffsetName": "UTC-10:00",
                  "abbreviation": "CKT",
                  "tzName": "Cook Island Time"
              }
          ]
      },
      {
          "id": 53,
          "name": "Costa Rica",
          "iso3": "CRI",
          "iso2": "CR",
          "numeric_code": "188",
          "phone_code": "506",
          "capital": "San Jose",
          "currency": "CRC",
          "currency_symbol": "₡",
          "tld": ".cr",
          "native": "Costa Rica",
          "region": "Americas",
          "subregion": "Central America",
          "timezones": [
              {
                  "zoneName": "America\/Costa_Rica",
                  "gmtOffset": -21600,
                  "gmtOffsetName": "UTC-06:00",
                  "abbreviation": "CST",
                  "tzName": "Central Standard Time (North America"
              }
          ]
      },
      {
          "id": 54,
          "name": "Cote D'Ivoire (Ivory Coast)",
          "iso3": "CIV",
          "iso2": "CI",
          "numeric_code": "384",
          "phone_code": "225",
          "capital": "Yamoussoukro",
          "currency": "XOF",
          "currency_symbol": "CFA",
          "tld": ".ci",
          "native": null,
          "region": "Africa",
          "subregion": "Western Africa",
          "timezones": [
              {
                  "zoneName": "Africa\/Abidjan",
                  "gmtOffset": 0,
                  "gmtOffsetName": "UTC±00",
                  "abbreviation": "GMT",
                  "tzName": "Greenwich Mean Time"
              }
          ]
      },
      {
          "id": 55,
          "name": "Croatia",
          "iso3": "HRV",
          "iso2": "HR",
          "numeric_code": "191",
          "phone_code": "385",
          "capital": "Zagreb",
          "currency": "HRK",
          "currency_symbol": "kn",
          "tld": ".hr",
          "native": "Hrvatska",
          "region": "Europe",
          "subregion": "Southern Europe",
          "timezones": [
              {
                  "zoneName": "Europe\/Zagreb",
                  "gmtOffset": 3600,
                  "gmtOffsetName": "UTC+01:00",
                  "abbreviation": "CET",
                  "tzName": "Central European Time"
              }
          ]
      },
      {
          "id": 56,
          "name": "Cuba",
          "iso3": "CUB",
          "iso2": "CU",
          "numeric_code": "192",
          "phone_code": "53",
          "capital": "Havana",
          "currency": "CUP",
          "currency_symbol": "$",
          "tld": ".cu",
          "native": "Cuba",
          "region": "Americas",
          "subregion": "Caribbean",
          "timezones": [
              {
                  "zoneName": "America\/Havana",
                  "gmtOffset": -18000,
                  "gmtOffsetName": "UTC-05:00",
                  "abbreviation": "CST",
                  "tzName": "Cuba Standard Time"
              }
          ]
      },
      {
          "id": 249,
          "name": "Curaçao",
          "iso3": "CUW",
          "iso2": "CW",
          "numeric_code": "531",
          "phone_code": "599",
          "capital": "Willemstad",
          "currency": "ANG",
          "currency_symbol": "ƒ",
          "tld": ".cw",
          "native": "Curaçao",
          "region": "Americas",
          "subregion": "Caribbean",
          "timezones": [
              {
                  "zoneName": "America\/Curacao",
                  "gmtOffset": -14400,
                  "gmtOffsetName": "UTC-04:00",
                  "abbreviation": "AST",
                  "tzName": "Atlantic Standard Time"
              }
          ]
      },
      {
          "id": 57,
          "name": "Cyprus",
          "iso3": "CYP",
          "iso2": "CY",
          "numeric_code": "196",
          "phone_code": "357",
          "capital": "Nicosia",
          "currency": "EUR",
          "currency_symbol": "€",
          "tld": ".cy",
          "native": "Κύπρος",
          "region": "Europe",
          "subregion": "Southern Europe",
          "timezones": [
              {
                  "zoneName": "Asia\/Famagusta",
                  "gmtOffset": 7200,
                  "gmtOffsetName": "UTC+02:00",
                  "abbreviation": "EET",
                  "tzName": "Eastern European Time"
              },
              {
                  "zoneName": "Asia\/Nicosia",
                  "gmtOffset": 7200,
                  "gmtOffsetName": "UTC+02:00",
                  "abbreviation": "EET",
                  "tzName": "Eastern European Time"
              }
          ]
      },
      {
          "id": 58,
          "name": "Czech Republic",
          "iso3": "CZE",
          "iso2": "CZ",
          "numeric_code": "203",
          "phone_code": "420",
          "capital": "Prague",
          "currency": "CZK",
          "currency_symbol": "Kč",
          "tld": ".cz",
          "native": "Česká republika",
          "region": "Europe",
          "subregion": "Eastern Europe",
          "timezones": [
              {
                  "zoneName": "Europe\/Prague",
                  "gmtOffset": 3600,
                  "gmtOffsetName": "UTC+01:00",
                  "abbreviation": "CET",
                  "tzName": "Central European Time"
              }
          ]
      },
      {
          "id": 51,
          "name": "Democratic Republic of the Congo",
          "iso3": "COD",
          "iso2": "CD",
          "numeric_code": "180",
          "phone_code": "243",
          "capital": "Kinshasa",
          "currency": "CDF",
          "currency_symbol": "FC",
          "tld": ".cd",
          "native": "République démocratique du Congo",
          "region": "Africa",
          "subregion": "Middle Africa",
          "timezones": [
              {
                  "zoneName": "Africa\/Kinshasa",
                  "gmtOffset": 3600,
                  "gmtOffsetName": "UTC+01:00",
                  "abbreviation": "WAT",
                  "tzName": "West Africa Time"
              },
              {
                  "zoneName": "Africa\/Lubumbashi",
                  "gmtOffset": 7200,
                  "gmtOffsetName": "UTC+02:00",
                  "abbreviation": "CAT",
                  "tzName": "Central Africa Time"
              }
          ]
      },
      {
          "id": 59,
          "name": "Denmark",
          "iso3": "DNK",
          "iso2": "DK",
          "numeric_code": "208",
          "phone_code": "45",
          "capital": "Copenhagen",
          "currency": "DKK",
          "currency_symbol": "Kr.",
          "tld": ".dk",
          "native": "Danmark",
          "region": "Europe",
          "subregion": "Northern Europe",
          "timezones": [
              {
                  "zoneName": "Europe\/Copenhagen",
                  "gmtOffset": 3600,
                  "gmtOffsetName": "UTC+01:00",
                  "abbreviation": "CET",
                  "tzName": "Central European Time"
              }
          ]
      },
      {
          "id": 60,
          "name": "Djibouti",
          "iso3": "DJI",
          "iso2": "DJ",
          "numeric_code": "262",
          "phone_code": "253",
          "capital": "Djibouti",
          "currency": "DJF",
          "currency_symbol": "Fdj",
          "tld": ".dj",
          "native": "Djibouti",
          "region": "Africa",
          "subregion": "Eastern Africa",
          "timezones": [
              {
                  "zoneName": "Africa\/Djibouti",
                  "gmtOffset": 10800,
                  "gmtOffsetName": "UTC+03:00",
                  "abbreviation": "EAT",
                  "tzName": "East Africa Time"
              }
          ]
      },
      {
          "id": 61,
          "name": "Dominica",
          "iso3": "DMA",
          "iso2": "DM",
          "numeric_code": "212",
          "phone_code": "+1-767",
          "capital": "Roseau",
          "currency": "XCD",
          "currency_symbol": "$",
          "tld": ".dm",
          "native": "Dominica",
          "region": "Americas",
          "subregion": "Caribbean",
          "timezones": [
              {
                  "zoneName": "America\/Dominica",
                  "gmtOffset": -14400,
                  "gmtOffsetName": "UTC-04:00",
                  "abbreviation": "AST",
                  "tzName": "Atlantic Standard Time"
              }
          ]
      },
      {
          "id": 62,
          "name": "Dominican Republic",
          "iso3": "DOM",
          "iso2": "DO",
          "numeric_code": "214",
          "phone_code": "+1-809 and 1-829",
          "capital": "Santo Domingo",
          "currency": "DOP",
          "currency_symbol": "$",
          "tld": ".do",
          "native": "República Dominicana",
          "region": "Americas",
          "subregion": "Caribbean",
          "timezones": [
              {
                  "zoneName": "America\/Santo_Domingo",
                  "gmtOffset": -14400,
                  "gmtOffsetName": "UTC-04:00",
                  "abbreviation": "AST",
                  "tzName": "Atlantic Standard Time"
              }
          ]
      },
      {
          "id": 63,
          "name": "East Timor",
          "iso3": "TLS",
          "iso2": "TL",
          "numeric_code": "626",
          "phone_code": "670",
          "capital": "Dili",
          "currency": "USD",
          "currency_symbol": "$",
          "tld": ".tl",
          "native": "Timor-Leste",
          "region": "Asia",
          "subregion": "South-Eastern Asia",
          "timezones": [
              {
                  "zoneName": "Asia\/Dili",
                  "gmtOffset": 32400,
                  "gmtOffsetName": "UTC+09:00",
                  "abbreviation": "TLT",
                  "tzName": "Timor Leste Time"
              }
          ]
      },
      {
          "id": 64,
          "name": "Ecuador",
          "iso3": "ECU",
          "iso2": "EC",
          "numeric_code": "218",
          "phone_code": "593",
          "capital": "Quito",
          "currency": "USD",
          "currency_symbol": "$",
          "tld": ".ec",
          "native": "Ecuador",
          "region": "Americas",
          "subregion": "South America",
          "timezones": [
              {
                  "zoneName": "America\/Guayaquil",
                  "gmtOffset": -18000,
                  "gmtOffsetName": "UTC-05:00",
                  "abbreviation": "ECT",
                  "tzName": "Ecuador Time"
              },
              {
                  "zoneName": "Pacific\/Galapagos",
                  "gmtOffset": -21600,
                  "gmtOffsetName": "UTC-06:00",
                  "abbreviation": "GALT",
                  "tzName": "Galápagos Time"
              }
          ]
      },
      {
          "id": 65,
          "name": "Egypt",
          "iso3": "EGY",
          "iso2": "EG",
          "numeric_code": "818",
          "phone_code": "20",
          "capital": "Cairo",
          "currency": "EGP",
          "currency_symbol": "ج.م",
          "tld": ".eg",
          "native": "مصر‎",
          "region": "Africa",
          "subregion": "Northern Africa",
          "timezones": [
              {
                  "zoneName": "Africa\/Cairo",
                  "gmtOffset": 7200,
                  "gmtOffsetName": "UTC+02:00",
                  "abbreviation": "EET",
                  "tzName": "Eastern European Time"
              }
          ]
      },
      {
          "id": 66,
          "name": "El Salvador",
          "iso3": "SLV",
          "iso2": "SV",
          "numeric_code": "222",
          "phone_code": "503",
          "capital": "San Salvador",
          "currency": "USD",
          "currency_symbol": "$",
          "tld": ".sv",
          "native": "El Salvador",
          "region": "Americas",
          "subregion": "Central America",
          "timezones": [
              {
                  "zoneName": "America\/El_Salvador",
                  "gmtOffset": -21600,
                  "gmtOffsetName": "UTC-06:00",
                  "abbreviation": "CST",
                  "tzName": "Central Standard Time (North America"
              }
          ]
      },
      {
          "id": 67,
          "name": "Equatorial Guinea",
          "iso3": "GNQ",
          "iso2": "GQ",
          "numeric_code": "226",
          "phone_code": "240",
          "capital": "Malabo",
          "currency": "XAF",
          "currency_symbol": "FCFA",
          "tld": ".gq",
          "native": "Guinea Ecuatorial",
          "region": "Africa",
          "subregion": "Middle Africa",
          "timezones": [
              {
                  "zoneName": "Africa\/Malabo",
                  "gmtOffset": 3600,
                  "gmtOffsetName": "UTC+01:00",
                  "abbreviation": "WAT",
                  "tzName": "West Africa Time"
              }
          ]
      },
      {
          "id": 68,
          "name": "Eritrea",
          "iso3": "ERI",
          "iso2": "ER",
          "numeric_code": "232",
          "phone_code": "291",
          "capital": "Asmara",
          "currency": "ERN",
          "currency_symbol": "Nfk",
          "tld": ".er",
          "native": "ኤርትራ",
          "region": "Africa",
          "subregion": "Eastern Africa",
          "timezones": [
              {
                  "zoneName": "Africa\/Asmara",
                  "gmtOffset": 10800,
                  "gmtOffsetName": "UTC+03:00",
                  "abbreviation": "EAT",
                  "tzName": "East Africa Time"
              }
          ]
      },
      {
          "id": 69,
          "name": "Estonia",
          "iso3": "EST",
          "iso2": "EE",
          "numeric_code": "233",
          "phone_code": "372",
          "capital": "Tallinn",
          "currency": "EUR",
          "currency_symbol": "€",
          "tld": ".ee",
          "native": "Eesti",
          "region": "Europe",
          "subregion": "Northern Europe",
          "timezones": [
              {
                  "zoneName": "Europe\/Tallinn",
                  "gmtOffset": 7200,
                  "gmtOffsetName": "UTC+02:00",
                  "abbreviation": "EET",
                  "tzName": "Eastern European Time"
              }
          ]
      },
      {
          "id": 70,
          "name": "Ethiopia",
          "iso3": "ETH",
          "iso2": "ET",
          "numeric_code": "231",
          "phone_code": "251",
          "capital": "Addis Ababa",
          "currency": "ETB",
          "currency_symbol": "Nkf",
          "tld": ".et",
          "native": "ኢትዮጵያ",
          "region": "Africa",
          "subregion": "Eastern Africa",
          "timezones": [
              {
                  "zoneName": "Africa\/Addis_Ababa",
                  "gmtOffset": 10800,
                  "gmtOffsetName": "UTC+03:00",
                  "abbreviation": "EAT",
                  "tzName": "East Africa Time"
              }
          ]
      },
      {
          "id": 71,
          "name": "Falkland Islands",
          "iso3": "FLK",
          "iso2": "FK",
          "numeric_code": "238",
          "phone_code": "500",
          "capital": "Stanley",
          "currency": "FKP",
          "currency_symbol": "£",
          "tld": ".fk",
          "native": "Falkland Islands",
          "region": "Americas",
          "subregion": "South America",
          "timezones": [
              {
                  "zoneName": "Atlantic\/Stanley",
                  "gmtOffset": -10800,
                  "gmtOffsetName": "UTC-03:00",
                  "abbreviation": "FKST",
                  "tzName": "Falkland Islands Summer Time"
              }
          ]
      },
      {
          "id": 72,
          "name": "Faroe Islands",
          "iso3": "FRO",
          "iso2": "FO",
          "numeric_code": "234",
          "phone_code": "298",
          "capital": "Torshavn",
          "currency": "DKK",
          "currency_symbol": "Kr.",
          "tld": ".fo",
          "native": "Føroyar",
          "region": "Europe",
          "subregion": "Northern Europe",
          "timezones": [
              {
                  "zoneName": "Atlantic\/Faroe",
                  "gmtOffset": 0,
                  "gmtOffsetName": "UTC±00",
                  "abbreviation": "WET",
                  "tzName": "Western European Time"
              }
          ]
      },
      {
          "id": 73,
          "name": "Fiji Islands",
          "iso3": "FJI",
          "iso2": "FJ",
          "numeric_code": "242",
          "phone_code": "679",
          "capital": "Suva",
          "currency": "FJD",
          "currency_symbol": "FJ$",
          "tld": ".fj",
          "native": "Fiji",
          "region": "Oceania",
          "subregion": "Melanesia",
          "timezones": [
              {
                  "zoneName": "Pacific\/Fiji",
                  "gmtOffset": 43200,
                  "gmtOffsetName": "UTC+12:00",
                  "abbreviation": "FJT",
                  "tzName": "Fiji Time"
              }
          ]
      },
      {
          "id": 74,
          "name": "Finland",
          "iso3": "FIN",
          "iso2": "FI",
          "numeric_code": "246",
          "phone_code": "358",
          "capital": "Helsinki",
          "currency": "EUR",
          "currency_symbol": "€",
          "tld": ".fi",
          "native": "Suomi",
          "region": "Europe",
          "subregion": "Northern Europe",
          "timezones": [
              {
                  "zoneName": "Europe\/Helsinki",
                  "gmtOffset": 7200,
                  "gmtOffsetName": "UTC+02:00",
                  "abbreviation": "EET",
                  "tzName": "Eastern European Time"
              }
          ]
      },
      {
          "id": 75,
          "name": "France",
          "iso3": "FRA",
          "iso2": "FR",
          "numeric_code": "250",
          "phone_code": "33",
          "capital": "Paris",
          "currency": "EUR",
          "currency_symbol": "€",
          "tld": ".fr",
          "native": "France",
          "region": "Europe",
          "subregion": "Western Europe",
          "timezones": [
              {
                  "zoneName": "Europe\/Paris",
                  "gmtOffset": 3600,
                  "gmtOffsetName": "UTC+01:00",
                  "abbreviation": "CET",
                  "tzName": "Central European Time"
              }
          ]
      },
      {
          "id": 76,
          "name": "French Guiana",
          "iso3": "GUF",
          "iso2": "GF",
          "numeric_code": "254",
          "phone_code": "594",
          "capital": "Cayenne",
          "currency": "EUR",
          "currency_symbol": "€",
          "tld": ".gf",
          "native": "Guyane française",
          "region": "Americas",
          "subregion": "South America",
          "timezones": [
              {
                  "zoneName": "America\/Cayenne",
                  "gmtOffset": -10800,
                  "gmtOffsetName": "UTC-03:00",
                  "abbreviation": "GFT",
                  "tzName": "French Guiana Time"
              }
          ]
      },
      {
          "id": 77,
          "name": "French Polynesia",
          "iso3": "PYF",
          "iso2": "PF",
          "numeric_code": "258",
          "phone_code": "689",
          "capital": "Papeete",
          "currency": "XPF",
          "currency_symbol": "₣",
          "tld": ".pf",
          "native": "Polynésie française",
          "region": "Oceania",
          "subregion": "Polynesia",
          "timezones": [
              {
                  "zoneName": "Pacific\/Gambier",
                  "gmtOffset": -32400,
                  "gmtOffsetName": "UTC-09:00",
                  "abbreviation": "GAMT",
                  "tzName": "Gambier Islands Time"
              },
              {
                  "zoneName": "Pacific\/Marquesas",
                  "gmtOffset": -34200,
                  "gmtOffsetName": "UTC-09:30",
                  "abbreviation": "MART",
                  "tzName": "Marquesas Islands Time"
              },
              {
                  "zoneName": "Pacific\/Tahiti",
                  "gmtOffset": -36000,
                  "gmtOffsetName": "UTC-10:00",
                  "abbreviation": "TAHT",
                  "tzName": "Tahiti Time"
              }
          ]
      },
      {
          "id": 78,
          "name": "French Southern Territories",
          "iso3": "ATF",
          "iso2": "TF",
          "numeric_code": "260",
          "phone_code": "262",
          "capital": "Port-aux-Francais",
          "currency": "EUR",
          "currency_symbol": "€",
          "tld": ".tf",
          "native": "Territoire des Terres australes et antarctiques fr",
          "region": "Africa",
          "subregion": "Southern Africa",
          "timezones": [
              {
                  "zoneName": "Indian\/Kerguelen",
                  "gmtOffset": 18000,
                  "gmtOffsetName": "UTC+05:00",
                  "abbreviation": "TFT",
                  "tzName": "French Southern and Antarctic Time"
              }
          ]
      },
      {
          "id": 79,
          "name": "Gabon",
          "iso3": "GAB",
          "iso2": "GA",
          "numeric_code": "266",
          "phone_code": "241",
          "capital": "Libreville",
          "currency": "XAF",
          "currency_symbol": "FCFA",
          "tld": ".ga",
          "native": "Gabon",
          "region": "Africa",
          "subregion": "Middle Africa",
          "timezones": [
              {
                  "zoneName": "Africa\/Libreville",
                  "gmtOffset": 3600,
                  "gmtOffsetName": "UTC+01:00",
                  "abbreviation": "WAT",
                  "tzName": "West Africa Time"
              }
          ]
      },
      {
          "id": 80,
          "name": "Gambia The",
          "iso3": "GMB",
          "iso2": "GM",
          "numeric_code": "270",
          "phone_code": "220",
          "capital": "Banjul",
          "currency": "GMD",
          "currency_symbol": "D",
          "tld": ".gm",
          "native": "Gambia",
          "region": "Africa",
          "subregion": "Western Africa",
          "timezones": [
              {
                  "zoneName": "Africa\/Banjul",
                  "gmtOffset": 0,
                  "gmtOffsetName": "UTC±00",
                  "abbreviation": "GMT",
                  "tzName": "Greenwich Mean Time"
              }
          ]
      },
      {
          "id": 81,
          "name": "Georgia",
          "iso3": "GEO",
          "iso2": "GE",
          "numeric_code": "268",
          "phone_code": "995",
          "capital": "Tbilisi",
          "currency": "GEL",
          "currency_symbol": "ლ",
          "tld": ".ge",
          "native": "საქართველო",
          "region": "Asia",
          "subregion": "Western Asia",
          "timezones": [
              {
                  "zoneName": "Asia\/Tbilisi",
                  "gmtOffset": 14400,
                  "gmtOffsetName": "UTC+04:00",
                  "abbreviation": "GET",
                  "tzName": "Georgia Standard Time"
              }
          ]
      },
      {
          "id": 82,
          "name": "Germany",
          "iso3": "DEU",
          "iso2": "DE",
          "numeric_code": "276",
          "phone_code": "49",
          "capital": "Berlin",
          "currency": "EUR",
          "currency_symbol": "€",
          "tld": ".de",
          "native": "Deutschland",
          "region": "Europe",
          "subregion": "Western Europe",
          "timezones": [
              {
                  "zoneName": "Europe\/Berlin",
                  "gmtOffset": 3600,
                  "gmtOffsetName": "UTC+01:00",
                  "abbreviation": "CET",
                  "tzName": "Central European Time"
              },
              {
                  "zoneName": "Europe\/Busingen",
                  "gmtOffset": 3600,
                  "gmtOffsetName": "UTC+01:00",
                  "abbreviation": "CET",
                  "tzName": "Central European Time"
              }
          ]
      },
      {
          "id": 83,
          "name": "Ghana",
          "iso3": "GHA",
          "iso2": "GH",
          "numeric_code": "288",
          "phone_code": "233",
          "capital": "Accra",
          "currency": "GHS",
          "currency_symbol": "GH₵",
          "tld": ".gh",
          "native": "Ghana",
          "region": "Africa",
          "subregion": "Western Africa",
          "timezones": [
              {
                  "zoneName": "Africa\/Accra",
                  "gmtOffset": 0,
                  "gmtOffsetName": "UTC±00",
                  "abbreviation": "GMT",
                  "tzName": "Greenwich Mean Time"
              }
          ]
      },
      {
          "id": 84,
          "name": "Gibraltar",
          "iso3": "GIB",
          "iso2": "GI",
          "numeric_code": "292",
          "phone_code": "350",
          "capital": "Gibraltar",
          "currency": "GIP",
          "currency_symbol": "£",
          "tld": ".gi",
          "native": "Gibraltar",
          "region": "Europe",
          "subregion": "Southern Europe",
          "timezones": [
              {
                  "zoneName": "Europe\/Gibraltar",
                  "gmtOffset": 3600,
                  "gmtOffsetName": "UTC+01:00",
                  "abbreviation": "CET",
                  "tzName": "Central European Time"
              }
          ]
      },
      {
          "id": 85,
          "name": "Greece",
          "iso3": "GRC",
          "iso2": "GR",
          "numeric_code": "300",
          "phone_code": "30",
          "capital": "Athens",
          "currency": "EUR",
          "currency_symbol": "€",
          "tld": ".gr",
          "native": "Ελλάδα",
          "region": "Europe",
          "subregion": "Southern Europe",
          "timezones": [
              {
                  "zoneName": "Europe\/Athens",
                  "gmtOffset": 7200,
                  "gmtOffsetName": "UTC+02:00",
                  "abbreviation": "EET",
                  "tzName": "Eastern European Time"
              }
          ]
      },
      {
          "id": 86,
          "name": "Greenland",
          "iso3": "GRL",
          "iso2": "GL",
          "numeric_code": "304",
          "phone_code": "299",
          "capital": "Nuuk",
          "currency": "DKK",
          "currency_symbol": "Kr.",
          "tld": ".gl",
          "native": "Kalaallit Nunaat",
          "region": "Americas",
          "subregion": "Northern America",
          "timezones": [
              {
                  "zoneName": "America\/Danmarkshavn",
                  "gmtOffset": 0,
                  "gmtOffsetName": "UTC±00",
                  "abbreviation": "GMT",
                  "tzName": "Greenwich Mean Time"
              },
              {
                  "zoneName": "America\/Nuuk",
                  "gmtOffset": -10800,
                  "gmtOffsetName": "UTC-03:00",
                  "abbreviation": "WGT",
                  "tzName": "West Greenland Time"
              },
              {
                  "zoneName": "America\/Scoresbysund",
                  "gmtOffset": -3600,
                  "gmtOffsetName": "UTC-01:00",
                  "abbreviation": "EGT",
                  "tzName": "Eastern Greenland Time"
              },
              {
                  "zoneName": "America\/Thule",
                  "gmtOffset": -14400,
                  "gmtOffsetName": "UTC-04:00",
                  "abbreviation": "AST",
                  "tzName": "Atlantic Standard Time"
              }
          ]
      },
      {
          "id": 87,
          "name": "Grenada",
          "iso3": "GRD",
          "iso2": "GD",
          "numeric_code": "308",
          "phone_code": "+1-473",
          "capital": "St. George's",
          "currency": "XCD",
          "currency_symbol": "$",
          "tld": ".gd",
          "native": "Grenada",
          "region": "Americas",
          "subregion": "Caribbean",
          "timezones": [
              {
                  "zoneName": "America\/Grenada",
                  "gmtOffset": -14400,
                  "gmtOffsetName": "UTC-04:00",
                  "abbreviation": "AST",
                  "tzName": "Atlantic Standard Time"
              }
          ]
      },
      {
          "id": 88,
          "name": "Guadeloupe",
          "iso3": "GLP",
          "iso2": "GP",
          "numeric_code": "312",
          "phone_code": "590",
          "capital": "Basse-Terre",
          "currency": "EUR",
          "currency_symbol": "€",
          "tld": ".gp",
          "native": "Guadeloupe",
          "region": "Americas",
          "subregion": "Caribbean",
          "timezones": [
              {
                  "zoneName": "America\/Guadeloupe",
                  "gmtOffset": -14400,
                  "gmtOffsetName": "UTC-04:00",
                  "abbreviation": "AST",
                  "tzName": "Atlantic Standard Time"
              }
          ]
      },
      {
          "id": 89,
          "name": "Guam",
          "iso3": "GUM",
          "iso2": "GU",
          "numeric_code": "316",
          "phone_code": "+1-671",
          "capital": "Hagatna",
          "currency": "USD",
          "currency_symbol": "$",
          "tld": ".gu",
          "native": "Guam",
          "region": "Oceania",
          "subregion": "Micronesia",
          "timezones": [
              {
                  "zoneName": "Pacific\/Guam",
                  "gmtOffset": 36000,
                  "gmtOffsetName": "UTC+10:00",
                  "abbreviation": "CHST",
                  "tzName": "Chamorro Standard Time"
              }
          ]
      },
      {
          "id": 90,
          "name": "Guatemala",
          "iso3": "GTM",
          "iso2": "GT",
          "numeric_code": "320",
          "phone_code": "502",
          "capital": "Guatemala City",
          "currency": "GTQ",
          "currency_symbol": "Q",
          "tld": ".gt",
          "native": "Guatemala",
          "region": "Americas",
          "subregion": "Central America",
          "timezones": [
              {
                  "zoneName": "America\/Guatemala",
                  "gmtOffset": -21600,
                  "gmtOffsetName": "UTC-06:00",
                  "abbreviation": "CST",
                  "tzName": "Central Standard Time (North America"
              }
          ]
      },
      {
          "id": 91,
          "name": "Guernsey and Alderney",
          "iso3": "GGY",
          "iso2": "GG",
          "numeric_code": "831",
          "phone_code": "+44-1481",
          "capital": "St Peter Port",
          "currency": "GBP",
          "currency_symbol": "£",
          "tld": ".gg",
          "native": "Guernsey",
          "region": "Europe",
          "subregion": "Northern Europe",
          "timezones": [
              {
                  "zoneName": "Europe\/Guernsey",
                  "gmtOffset": 0,
                  "gmtOffsetName": "UTC±00",
                  "abbreviation": "GMT",
                  "tzName": "Greenwich Mean Time"
              }
          ]
      },
      {
          "id": 92,
          "name": "Guinea",
          "iso3": "GIN",
          "iso2": "GN",
          "numeric_code": "324",
          "phone_code": "224",
          "capital": "Conakry",
          "currency": "GNF",
          "currency_symbol": "FG",
          "tld": ".gn",
          "native": "Guinée",
          "region": "Africa",
          "subregion": "Western Africa",
          "timezones": [
              {
                  "zoneName": "Africa\/Conakry",
                  "gmtOffset": 0,
                  "gmtOffsetName": "UTC±00",
                  "abbreviation": "GMT",
                  "tzName": "Greenwich Mean Time"
              }
          ]
      },
      {
          "id": 93,
          "name": "Guinea-Bissau",
          "iso3": "GNB",
          "iso2": "GW",
          "numeric_code": "624",
          "phone_code": "245",
          "capital": "Bissau",
          "currency": "XOF",
          "currency_symbol": "CFA",
          "tld": ".gw",
          "native": "Guiné-Bissau",
          "region": "Africa",
          "subregion": "Western Africa",
          "timezones": [
              {
                  "zoneName": "Africa\/Bissau",
                  "gmtOffset": 0,
                  "gmtOffsetName": "UTC±00",
                  "abbreviation": "GMT",
                  "tzName": "Greenwich Mean Time"
              }
          ]
      },
      {
          "id": 94,
          "name": "Guyana",
          "iso3": "GUY",
          "iso2": "GY",
          "numeric_code": "328",
          "phone_code": "592",
          "capital": "Georgetown",
          "currency": "GYD",
          "currency_symbol": "$",
          "tld": ".gy",
          "native": "Guyana",
          "region": "Americas",
          "subregion": "South America",
          "timezones": [
              {
                  "zoneName": "America\/Guyana",
                  "gmtOffset": -14400,
                  "gmtOffsetName": "UTC-04:00",
                  "abbreviation": "GYT",
                  "tzName": "Guyana Time"
              }
          ]
      },
      {
          "id": 95,
          "name": "Haiti",
          "iso3": "HTI",
          "iso2": "HT",
          "numeric_code": "332",
          "phone_code": "509",
          "capital": "Port-au-Prince",
          "currency": "HTG",
          "currency_symbol": "G",
          "tld": ".ht",
          "native": "Haïti",
          "region": "Americas",
          "subregion": "Caribbean",
          "timezones": [
              {
                  "zoneName": "America\/Port-au-Prince",
                  "gmtOffset": -18000,
                  "gmtOffsetName": "UTC-05:00",
                  "abbreviation": "EST",
                  "tzName": "Eastern Standard Time (North America"
              }
          ]
      },
      {
          "id": 96,
          "name": "Heard Island and McDonald Islands",
          "iso3": "HMD",
          "iso2": "HM",
          "numeric_code": "334",
          "phone_code": "672",
          "capital": "",
          "currency": "AUD",
          "currency_symbol": "$",
          "tld": ".hm",
          "native": "Heard Island and McDonald Islands",
          "region": "Polar",
          "subregion": "Polar",
          "timezones": [
              {
                  "zoneName": "Indian\/Kerguelen",
                  "gmtOffset": 18000,
                  "gmtOffsetName": "UTC+05:00",
                  "abbreviation": "TFT",
                  "tzName": "French Southern and Antarctic Time"
              }
          ]
      },
      {
          "id": 97,
          "name": "Honduras",
          "iso3": "HND",
          "iso2": "HN",
          "numeric_code": "340",
          "phone_code": "504",
          "capital": "Tegucigalpa",
          "currency": "HNL",
          "currency_symbol": "L",
          "tld": ".hn",
          "native": "Honduras",
          "region": "Americas",
          "subregion": "Central America",
          "timezones": [
              {
                  "zoneName": "America\/Tegucigalpa",
                  "gmtOffset": -21600,
                  "gmtOffsetName": "UTC-06:00",
                  "abbreviation": "CST",
                  "tzName": "Central Standard Time (North America"
              }
          ]
      },
      {
          "id": 98,
          "name": "Hong Kong S.A.R.",
          "iso3": "HKG",
          "iso2": "HK",
          "numeric_code": "344",
          "phone_code": "852",
          "capital": "Hong Kong",
          "currency": "HKD",
          "currency_symbol": "$",
          "tld": ".hk",
          "native": "香港",
          "region": "Asia",
          "subregion": "Eastern Asia",
          "timezones": [
              {
                  "zoneName": "Asia\/Hong_Kong",
                  "gmtOffset": 28800,
                  "gmtOffsetName": "UTC+08:00",
                  "abbreviation": "HKT",
                  "tzName": "Hong Kong Time"
              }
          ]
      },
      {
          "id": 99,
          "name": "Hungary",
          "iso3": "HUN",
          "iso2": "HU",
          "numeric_code": "348",
          "phone_code": "36",
          "capital": "Budapest",
          "currency": "HUF",
          "currency_symbol": "Ft",
          "tld": ".hu",
          "native": "Magyarország",
          "region": "Europe",
          "subregion": "Eastern Europe",
          "timezones": [
              {
                  "zoneName": "Europe\/Budapest",
                  "gmtOffset": 3600,
                  "gmtOffsetName": "UTC+01:00",
                  "abbreviation": "CET",
                  "tzName": "Central European Time"
              }
          ]
      },
      {
          "id": 100,
          "name": "Iceland",
          "iso3": "ISL",
          "iso2": "IS",
          "numeric_code": "352",
          "phone_code": "354",
          "capital": "Reykjavik",
          "currency": "ISK",
          "currency_symbol": "kr",
          "tld": ".is",
          "native": "Ísland",
          "region": "Europe",
          "subregion": "Northern Europe",
          "timezones": [
              {
                  "zoneName": "Atlantic\/Reykjavik",
                  "gmtOffset": 0,
                  "gmtOffsetName": "UTC±00",
                  "abbreviation": "GMT",
                  "tzName": "Greenwich Mean Time"
              }
          ]
      },
      {
          "id": 101,
          "name": "India",
          "iso3": "IND",
          "iso2": "IN",
          "numeric_code": "356",
          "phone_code": "91",
          "capital": "New Delhi",
          "currency": "INR",
          "currency_symbol": "₹",
          "tld": ".in",
          "native": "भारत",
          "region": "Asia",
          "subregion": "Southern Asia",
          "timezones": [
              {
                  "zoneName": "Asia\/Kolkata",
                  "gmtOffset": 19800,
                  "gmtOffsetName": "UTC+05:30",
                  "abbreviation": "IST",
                  "tzName": "Indian Standard Time"
              }
          ]
      },
      {
          "id": 102,
          "name": "Indonesia",
          "iso3": "IDN",
          "iso2": "ID",
          "numeric_code": "360",
          "phone_code": "62",
          "capital": "Jakarta",
          "currency": "IDR",
          "currency_symbol": "Rp",
          "tld": ".id",
          "native": "Indonesia",
          "region": "Asia",
          "subregion": "South-Eastern Asia",
          "timezones": [
              {
                  "zoneName": "Asia\/Jakarta",
                  "gmtOffset": 25200,
                  "gmtOffsetName": "UTC+07:00",
                  "abbreviation": "WIB",
                  "tzName": "Western Indonesian Time"
              },
              {
                  "zoneName": "Asia\/Jayapura",
                  "gmtOffset": 32400,
                  "gmtOffsetName": "UTC+09:00",
                  "abbreviation": "WIT",
                  "tzName": "Eastern Indonesian Time"
              },
              {
                  "zoneName": "Asia\/Makassar",
                  "gmtOffset": 28800,
                  "gmtOffsetName": "UTC+08:00",
                  "abbreviation": "WITA",
                  "tzName": "Central Indonesia Time"
              },
              {
                  "zoneName": "Asia\/Pontianak",
                  "gmtOffset": 25200,
                  "gmtOffsetName": "UTC+07:00",
                  "abbreviation": "WIB",
                  "tzName": "Western Indonesian Time"
              }
          ]
      },
      {
          "id": 103,
          "name": "Iran",
          "iso3": "IRN",
          "iso2": "IR",
          "numeric_code": "364",
          "phone_code": "98",
          "capital": "Tehran",
          "currency": "IRR",
          "currency_symbol": "﷼",
          "tld": ".ir",
          "native": "ایران",
          "region": "Asia",
          "subregion": "Southern Asia",
          "timezones": [
              {
                  "zoneName": "Asia\/Tehran",
                  "gmtOffset": 12600,
                  "gmtOffsetName": "UTC+03:30",
                  "abbreviation": "IRDT",
                  "tzName": "Iran Daylight Time"
              }
          ]
      },
      {
          "id": 104,
          "name": "Iraq",
          "iso3": "IRQ",
          "iso2": "IQ",
          "numeric_code": "368",
          "phone_code": "964",
          "capital": "Baghdad",
          "currency": "IQD",
          "currency_symbol": "د.ع",
          "tld": ".iq",
          "native": "العراق",
          "region": "Asia",
          "subregion": "Western Asia",
          "timezones": [
              {
                  "zoneName": "Asia\/Baghdad",
                  "gmtOffset": 10800,
                  "gmtOffsetName": "UTC+03:00",
                  "abbreviation": "AST",
                  "tzName": "Arabia Standard Time"
              }
          ]
      },
      {
          "id": 105,
          "name": "Ireland",
          "iso3": "IRL",
          "iso2": "IE",
          "numeric_code": "372",
          "phone_code": "353",
          "capital": "Dublin",
          "currency": "EUR",
          "currency_symbol": "€",
          "tld": ".ie",
          "native": "Éire",
          "region": "Europe",
          "subregion": "Northern Europe",
          "timezones": [
              {
                  "zoneName": "Europe\/Dublin",
                  "gmtOffset": 0,
                  "gmtOffsetName": "UTC±00",
                  "abbreviation": "GMT",
                  "tzName": "Greenwich Mean Time"
              }
          ]
      },
      {
          "id": 106,
          "name": "Israel",
          "iso3": "ISR",
          "iso2": "IL",
          "numeric_code": "376",
          "phone_code": "972",
          "capital": "Jerusalem",
          "currency": "ILS",
          "currency_symbol": "₪",
          "tld": ".il",
          "native": "יִשְׂרָאֵל",
          "region": "Asia",
          "subregion": "Western Asia",
          "timezones": [
              {
                  "zoneName": "Asia\/Jerusalem",
                  "gmtOffset": 7200,
                  "gmtOffsetName": "UTC+02:00",
                  "abbreviation": "IST",
                  "tzName": "Israel Standard Time"
              }
          ]
      },
      {
          "id": 107,
          "name": "Italy",
          "iso3": "ITA",
          "iso2": "IT",
          "numeric_code": "380",
          "phone_code": "39",
          "capital": "Rome",
          "currency": "EUR",
          "currency_symbol": "€",
          "tld": ".it",
          "native": "Italia",
          "region": "Europe",
          "subregion": "Southern Europe",
          "timezones": [
              {
                  "zoneName": "Europe\/Rome",
                  "gmtOffset": 3600,
                  "gmtOffsetName": "UTC+01:00",
                  "abbreviation": "CET",
                  "tzName": "Central European Time"
              }
          ]
      },
      {
          "id": 108,
          "name": "Jamaica",
          "iso3": "JAM",
          "iso2": "JM",
          "numeric_code": "388",
          "phone_code": "+1-876",
          "capital": "Kingston",
          "currency": "JMD",
          "currency_symbol": "J$",
          "tld": ".jm",
          "native": "Jamaica",
          "region": "Americas",
          "subregion": "Caribbean",
          "timezones": [
              {
                  "zoneName": "America\/Jamaica",
                  "gmtOffset": -18000,
                  "gmtOffsetName": "UTC-05:00",
                  "abbreviation": "EST",
                  "tzName": "Eastern Standard Time (North America"
              }
          ]
      },
      {
          "id": 109,
          "name": "Japan",
          "iso3": "JPN",
          "iso2": "JP",
          "numeric_code": "392",
          "phone_code": "81",
          "capital": "Tokyo",
          "currency": "JPY",
          "currency_symbol": "¥",
          "tld": ".jp",
          "native": "日本",
          "region": "Asia",
          "subregion": "Eastern Asia",
          "timezones": [
              {
                  "zoneName": "Asia\/Tokyo",
                  "gmtOffset": 32400,
                  "gmtOffsetName": "UTC+09:00",
                  "abbreviation": "JST",
                  "tzName": "Japan Standard Time"
              }
          ]
      },
      {
          "id": 110,
          "name": "Jersey",
          "iso3": "JEY",
          "iso2": "JE",
          "numeric_code": "832",
          "phone_code": "+44-1534",
          "capital": "Saint Helier",
          "currency": "GBP",
          "currency_symbol": "£",
          "tld": ".je",
          "native": "Jersey",
          "region": "Europe",
          "subregion": "Northern Europe",
          "timezones": [
              {
                  "zoneName": "Europe\/Jersey",
                  "gmtOffset": 0,
                  "gmtOffsetName": "UTC±00",
                  "abbreviation": "GMT",
                  "tzName": "Greenwich Mean Time"
              }
          ]
      },
      {
          "id": 111,
          "name": "Jordan",
          "iso3": "JOR",
          "iso2": "JO",
          "numeric_code": "400",
          "phone_code": "962",
          "capital": "Amman",
          "currency": "JOD",
          "currency_symbol": "ا.د",
          "tld": ".jo",
          "native": "الأردن",
          "region": "Asia",
          "subregion": "Western Asia",
          "timezones": [
              {
                  "zoneName": "Asia\/Amman",
                  "gmtOffset": 7200,
                  "gmtOffsetName": "UTC+02:00",
                  "abbreviation": "EET",
                  "tzName": "Eastern European Time"
              }
          ]
      },
      {
          "id": 112,
          "name": "Kazakhstan",
          "iso3": "KAZ",
          "iso2": "KZ",
          "numeric_code": "398",
          "phone_code": "7",
          "capital": "Astana",
          "currency": "KZT",
          "currency_symbol": "лв",
          "tld": ".kz",
          "native": "Қазақстан",
          "region": "Asia",
          "subregion": "Central Asia",
          "timezones": [
              {
                  "zoneName": "Asia\/Almaty",
                  "gmtOffset": 21600,
                  "gmtOffsetName": "UTC+06:00",
                  "abbreviation": "ALMT",
                  "tzName": "Alma-Ata Time[1"
              },
              {
                  "zoneName": "Asia\/Aqtau",
                  "gmtOffset": 18000,
                  "gmtOffsetName": "UTC+05:00",
                  "abbreviation": "AQTT",
                  "tzName": "Aqtobe Time"
              },
              {
                  "zoneName": "Asia\/Aqtobe",
                  "gmtOffset": 18000,
                  "gmtOffsetName": "UTC+05:00",
                  "abbreviation": "AQTT",
                  "tzName": "Aqtobe Time"
              },
              {
                  "zoneName": "Asia\/Atyrau",
                  "gmtOffset": 18000,
                  "gmtOffsetName": "UTC+05:00",
                  "abbreviation": "MSD+1",
                  "tzName": "Moscow Daylight Time+1"
              },
              {
                  "zoneName": "Asia\/Oral",
                  "gmtOffset": 18000,
                  "gmtOffsetName": "UTC+05:00",
                  "abbreviation": "ORAT",
                  "tzName": "Oral Time"
              },
              {
                  "zoneName": "Asia\/Qostanay",
                  "gmtOffset": 21600,
                  "gmtOffsetName": "UTC+06:00",
                  "abbreviation": "QYZST",
                  "tzName": "Qyzylorda Summer Time"
              },
              {
                  "zoneName": "Asia\/Qyzylorda",
                  "gmtOffset": 18000,
                  "gmtOffsetName": "UTC+05:00",
                  "abbreviation": "QYZT",
                  "tzName": "Qyzylorda Summer Time"
              }
          ]
      },
      {
          "id": 113,
          "name": "Kenya",
          "iso3": "KEN",
          "iso2": "KE",
          "numeric_code": "404",
          "phone_code": "254",
          "capital": "Nairobi",
          "currency": "KES",
          "currency_symbol": "KSh",
          "tld": ".ke",
          "native": "Kenya",
          "region": "Africa",
          "subregion": "Eastern Africa",
          "timezones": [
              {
                  "zoneName": "Africa\/Nairobi",
                  "gmtOffset": 10800,
                  "gmtOffsetName": "UTC+03:00",
                  "abbreviation": "EAT",
                  "tzName": "East Africa Time"
              }
          ]
      },
      {
          "id": 114,
          "name": "Kiribati",
          "iso3": "KIR",
          "iso2": "KI",
          "numeric_code": "296",
          "phone_code": "686",
          "capital": "Tarawa",
          "currency": "AUD",
          "currency_symbol": "$",
          "tld": ".ki",
          "native": "Kiribati",
          "region": "Oceania",
          "subregion": "Micronesia",
          "timezones": [
              {
                  "zoneName": "Pacific\/Enderbury",
                  "gmtOffset": 46800,
                  "gmtOffsetName": "UTC+13:00",
                  "abbreviation": "PHOT",
                  "tzName": "Phoenix Island Time"
              },
              {
                  "zoneName": "Pacific\/Kiritimati",
                  "gmtOffset": 50400,
                  "gmtOffsetName": "UTC+14:00",
                  "abbreviation": "LINT",
                  "tzName": "Line Islands Time"
              },
              {
                  "zoneName": "Pacific\/Tarawa",
                  "gmtOffset": 43200,
                  "gmtOffsetName": "UTC+12:00",
                  "abbreviation": "GILT",
                  "tzName": "Gilbert Island Time"
              }
          ]
      },
      {
          "id": 248,
          "name": "Kosovo",
          "iso3": "XKX",
          "iso2": "XK",
          "numeric_code": "926",
          "phone_code": "383",
          "capital": "Pristina",
          "currency": "EUR",
          "currency_symbol": "€",
          "tld": ".xk",
          "native": "Republika e Kosovës",
          "region": "Europe",
          "subregion": "Eastern Europe",
          "timezones": [
              {
                  "zoneName": "Europe\/Belgrade",
                  "gmtOffset": 3600,
                  "gmtOffsetName": "UTC+01:00",
                  "abbreviation": "CET",
                  "tzName": "Central European Time"
              }
          ]
      },
      {
          "id": 117,
          "name": "Kuwait",
          "iso3": "KWT",
          "iso2": "KW",
          "numeric_code": "414",
          "phone_code": "965",
          "capital": "Kuwait City",
          "currency": "KWD",
          "currency_symbol": "ك.د",
          "tld": ".kw",
          "native": "الكويت",
          "region": "Asia",
          "subregion": "Western Asia",
          "timezones": [
              {
                  "zoneName": "Asia\/Kuwait",
                  "gmtOffset": 10800,
                  "gmtOffsetName": "UTC+03:00",
                  "abbreviation": "AST",
                  "tzName": "Arabia Standard Time"
              }
          ]
      },
      {
          "id": 118,
          "name": "Kyrgyzstan",
          "iso3": "KGZ",
          "iso2": "KG",
          "numeric_code": "417",
          "phone_code": "996",
          "capital": "Bishkek",
          "currency": "KGS",
          "currency_symbol": "лв",
          "tld": ".kg",
          "native": "Кыргызстан",
          "region": "Asia",
          "subregion": "Central Asia",
          "timezones": [
              {
                  "zoneName": "Asia\/Bishkek",
                  "gmtOffset": 21600,
                  "gmtOffsetName": "UTC+06:00",
                  "abbreviation": "KGT",
                  "tzName": "Kyrgyzstan Time"
              }
          ]
      },
      {
          "id": 119,
          "name": "Laos",
          "iso3": "LAO",
          "iso2": "LA",
          "numeric_code": "418",
          "phone_code": "856",
          "capital": "Vientiane",
          "currency": "LAK",
          "currency_symbol": "₭",
          "tld": ".la",
          "native": "ສປປລາວ",
          "region": "Asia",
          "subregion": "South-Eastern Asia",
          "timezones": [
              {
                  "zoneName": "Asia\/Vientiane",
                  "gmtOffset": 25200,
                  "gmtOffsetName": "UTC+07:00",
                  "abbreviation": "ICT",
                  "tzName": "Indochina Time"
              }
          ]
      },
      {
          "id": 120,
          "name": "Latvia",
          "iso3": "LVA",
          "iso2": "LV",
          "numeric_code": "428",
          "phone_code": "371",
          "capital": "Riga",
          "currency": "EUR",
          "currency_symbol": "€",
          "tld": ".lv",
          "native": "Latvija",
          "region": "Europe",
          "subregion": "Northern Europe",
          "timezones": [
              {
                  "zoneName": "Europe\/Riga",
                  "gmtOffset": 7200,
                  "gmtOffsetName": "UTC+02:00",
                  "abbreviation": "EET",
                  "tzName": "Eastern European Time"
              }
          ]
      },
      {
          "id": 121,
          "name": "Lebanon",
          "iso3": "LBN",
          "iso2": "LB",
          "numeric_code": "422",
          "phone_code": "961",
          "capital": "Beirut",
          "currency": "LBP",
          "currency_symbol": "£",
          "tld": ".lb",
          "native": "لبنان",
          "region": "Asia",
          "subregion": "Western Asia",
          "timezones": [
              {
                  "zoneName": "Asia\/Beirut",
                  "gmtOffset": 7200,
                  "gmtOffsetName": "UTC+02:00",
                  "abbreviation": "EET",
                  "tzName": "Eastern European Time"
              }
          ]
      },
      {
          "id": 122,
          "name": "Lesotho",
          "iso3": "LSO",
          "iso2": "LS",
          "numeric_code": "426",
          "phone_code": "266",
          "capital": "Maseru",
          "currency": "LSL",
          "currency_symbol": "L",
          "tld": ".ls",
          "native": "Lesotho",
          "region": "Africa",
          "subregion": "Southern Africa",
          "timezones": [
              {
                  "zoneName": "Africa\/Maseru",
                  "gmtOffset": 7200,
                  "gmtOffsetName": "UTC+02:00",
                  "abbreviation": "SAST",
                  "tzName": "South African Standard Time"
              }
          ]
      },
      {
          "id": 123,
          "name": "Liberia",
          "iso3": "LBR",
          "iso2": "LR",
          "numeric_code": "430",
          "phone_code": "231",
          "capital": "Monrovia",
          "currency": "LRD",
          "currency_symbol": "$",
          "tld": ".lr",
          "native": "Liberia",
          "region": "Africa",
          "subregion": "Western Africa",
          "timezones": [
              {
                  "zoneName": "Africa\/Monrovia",
                  "gmtOffset": 0,
                  "gmtOffsetName": "UTC±00",
                  "abbreviation": "GMT",
                  "tzName": "Greenwich Mean Time"
              }
          ]
      },
      {
          "id": 124,
          "name": "Libya",
          "iso3": "LBY",
          "iso2": "LY",
          "numeric_code": "434",
          "phone_code": "218",
          "capital": "Tripolis",
          "currency": "LYD",
          "currency_symbol": "د.ل",
          "tld": ".ly",
          "native": "‏ليبيا",
          "region": "Africa",
          "subregion": "Northern Africa",
          "timezones": [
              {
                  "zoneName": "Africa\/Tripoli",
                  "gmtOffset": 7200,
                  "gmtOffsetName": "UTC+02:00",
                  "abbreviation": "EET",
                  "tzName": "Eastern European Time"
              }
          ]
      },
      {
          "id": 125,
          "name": "Liechtenstein",
          "iso3": "LIE",
          "iso2": "LI",
          "numeric_code": "438",
          "phone_code": "423",
          "capital": "Vaduz",
          "currency": "CHF",
          "currency_symbol": "CHf",
          "tld": ".li",
          "native": "Liechtenstein",
          "region": "Europe",
          "subregion": "Western Europe",
          "timezones": [
              {
                  "zoneName": "Europe\/Vaduz",
                  "gmtOffset": 3600,
                  "gmtOffsetName": "UTC+01:00",
                  "abbreviation": "CET",
                  "tzName": "Central European Time"
              }
          ]
      },
      {
          "id": 126,
          "name": "Lithuania",
          "iso3": "LTU",
          "iso2": "LT",
          "numeric_code": "440",
          "phone_code": "370",
          "capital": "Vilnius",
          "currency": "EUR",
          "currency_symbol": "€",
          "tld": ".lt",
          "native": "Lietuva",
          "region": "Europe",
          "subregion": "Northern Europe",
          "timezones": [
              {
                  "zoneName": "Europe\/Vilnius",
                  "gmtOffset": 7200,
                  "gmtOffsetName": "UTC+02:00",
                  "abbreviation": "EET",
                  "tzName": "Eastern European Time"
              }
          ]
      },
      {
          "id": 127,
          "name": "Luxembourg",
          "iso3": "LUX",
          "iso2": "LU",
          "numeric_code": "442",
          "phone_code": "352",
          "capital": "Luxembourg",
          "currency": "EUR",
          "currency_symbol": "€",
          "tld": ".lu",
          "native": "Luxembourg",
          "region": "Europe",
          "subregion": "Western Europe",
          "timezones": [
              {
                  "zoneName": "Europe\/Luxembourg",
                  "gmtOffset": 3600,
                  "gmtOffsetName": "UTC+01:00",
                  "abbreviation": "CET",
                  "tzName": "Central European Time"
              }
          ]
      },
      {
          "id": 128,
          "name": "Macau S.A.R.",
          "iso3": "MAC",
          "iso2": "MO",
          "numeric_code": "446",
          "phone_code": "853",
          "capital": "Macao",
          "currency": "MOP",
          "currency_symbol": "$",
          "tld": ".mo",
          "native": "澳門",
          "region": "Asia",
          "subregion": "Eastern Asia",
          "timezones": [
              {
                  "zoneName": "Asia\/Macau",
                  "gmtOffset": 28800,
                  "gmtOffsetName": "UTC+08:00",
                  "abbreviation": "CST",
                  "tzName": "China Standard Time"
              }
          ]
      },
      {
          "id": 129,
          "name": "Macedonia",
          "iso3": "MKD",
          "iso2": "MK",
          "numeric_code": "807",
          "phone_code": "389",
          "capital": "Skopje",
          "currency": "MKD",
          "currency_symbol": "ден",
          "tld": ".mk",
          "native": "Северна Македонија",
          "region": "Europe",
          "subregion": "Southern Europe",
          "timezones": [
              {
                  "zoneName": "Europe\/Skopje",
                  "gmtOffset": 3600,
                  "gmtOffsetName": "UTC+01:00",
                  "abbreviation": "CET",
                  "tzName": "Central European Time"
              }
          ]
      },
      {
          "id": 130,
          "name": "Madagascar",
          "iso3": "MDG",
          "iso2": "MG",
          "numeric_code": "450",
          "phone_code": "261",
          "capital": "Antananarivo",
          "currency": "MGA",
          "currency_symbol": "Ar",
          "tld": ".mg",
          "native": "Madagasikara",
          "region": "Africa",
          "subregion": "Eastern Africa",
          "timezones": [
              {
                  "zoneName": "Indian\/Antananarivo",
                  "gmtOffset": 10800,
                  "gmtOffsetName": "UTC+03:00",
                  "abbreviation": "EAT",
                  "tzName": "East Africa Time"
              }
          ]
      },
      {
          "id": 131,
          "name": "Malawi",
          "iso3": "MWI",
          "iso2": "MW",
          "numeric_code": "454",
          "phone_code": "265",
          "capital": "Lilongwe",
          "currency": "MWK",
          "currency_symbol": "MK",
          "tld": ".mw",
          "native": "Malawi",
          "region": "Africa",
          "subregion": "Eastern Africa",
          "timezones": [
              {
                  "zoneName": "Africa\/Blantyre",
                  "gmtOffset": 7200,
                  "gmtOffsetName": "UTC+02:00",
                  "abbreviation": "CAT",
                  "tzName": "Central Africa Time"
              }
          ]
      },
      {
          "id": 132,
          "name": "Malaysia",
          "iso3": "MYS",
          "iso2": "MY",
          "numeric_code": "458",
          "phone_code": "60",
          "capital": "Kuala Lumpur",
          "currency": "MYR",
          "currency_symbol": "RM",
          "tld": ".my",
          "native": "Malaysia",
          "region": "Asia",
          "subregion": "South-Eastern Asia",
          "timezones": [
              {
                  "zoneName": "Asia\/Kuala_Lumpur",
                  "gmtOffset": 28800,
                  "gmtOffsetName": "UTC+08:00",
                  "abbreviation": "MYT",
                  "tzName": "Malaysia Time"
              },
              {
                  "zoneName": "Asia\/Kuching",
                  "gmtOffset": 28800,
                  "gmtOffsetName": "UTC+08:00",
                  "abbreviation": "MYT",
                  "tzName": "Malaysia Time"
              }
          ]
      },
      {
          "id": 133,
          "name": "Maldives",
          "iso3": "MDV",
          "iso2": "MV",
          "numeric_code": "462",
          "phone_code": "960",
          "capital": "Male",
          "currency": "MVR",
          "currency_symbol": "Rf",
          "tld": ".mv",
          "native": "Maldives",
          "region": "Asia",
          "subregion": "Southern Asia",
          "timezones": [
              {
                  "zoneName": "Indian\/Maldives",
                  "gmtOffset": 18000,
                  "gmtOffsetName": "UTC+05:00",
                  "abbreviation": "MVT",
                  "tzName": "Maldives Time"
              }
          ]
      },
      {
          "id": 134,
          "name": "Mali",
          "iso3": "MLI",
          "iso2": "ML",
          "numeric_code": "466",
          "phone_code": "223",
          "capital": "Bamako",
          "currency": "XOF",
          "currency_symbol": "CFA",
          "tld": ".ml",
          "native": "Mali",
          "region": "Africa",
          "subregion": "Western Africa",
          "timezones": [
              {
                  "zoneName": "Africa\/Bamako",
                  "gmtOffset": 0,
                  "gmtOffsetName": "UTC±00",
                  "abbreviation": "GMT",
                  "tzName": "Greenwich Mean Time"
              }
          ]
      },
      {
          "id": 135,
          "name": "Malta",
          "iso3": "MLT",
          "iso2": "MT",
          "numeric_code": "470",
          "phone_code": "356",
          "capital": "Valletta",
          "currency": "EUR",
          "currency_symbol": "€",
          "tld": ".mt",
          "native": "Malta",
          "region": "Europe",
          "subregion": "Southern Europe",
          "timezones": [
              {
                  "zoneName": "Europe\/Malta",
                  "gmtOffset": 3600,
                  "gmtOffsetName": "UTC+01:00",
                  "abbreviation": "CET",
                  "tzName": "Central European Time"
              }
          ]
      },
      {
          "id": 136,
          "name": "Man (Isle of)",
          "iso3": "IMN",
          "iso2": "IM",
          "numeric_code": "833",
          "phone_code": "+44-1624",
          "capital": "Douglas, Isle of Man",
          "currency": "GBP",
          "currency_symbol": "£",
          "tld": ".im",
          "native": "Isle of Man",
          "region": "Europe",
          "subregion": "Northern Europe",
          "timezones": [
              {
                  "zoneName": "Europe\/Isle_of_Man",
                  "gmtOffset": 0,
                  "gmtOffsetName": "UTC±00",
                  "abbreviation": "GMT",
                  "tzName": "Greenwich Mean Time"
              }
          ]
      },
      {
          "id": 137,
          "name": "Marshall Islands",
          "iso3": "MHL",
          "iso2": "MH",
          "numeric_code": "584",
          "phone_code": "692",
          "capital": "Majuro",
          "currency": "USD",
          "currency_symbol": "$",
          "tld": ".mh",
          "native": "M̧ajeļ",
          "region": "Oceania",
          "subregion": "Micronesia",
          "timezones": [
              {
                  "zoneName": "Pacific\/Kwajalein",
                  "gmtOffset": 43200,
                  "gmtOffsetName": "UTC+12:00",
                  "abbreviation": "MHT",
                  "tzName": "Marshall Islands Time"
              },
              {
                  "zoneName": "Pacific\/Majuro",
                  "gmtOffset": 43200,
                  "gmtOffsetName": "UTC+12:00",
                  "abbreviation": "MHT",
                  "tzName": "Marshall Islands Time"
              }
          ]
      },
      {
          "id": 138,
          "name": "Martinique",
          "iso3": "MTQ",
          "iso2": "MQ",
          "numeric_code": "474",
          "phone_code": "596",
          "capital": "Fort-de-France",
          "currency": "EUR",
          "currency_symbol": "€",
          "tld": ".mq",
          "native": "Martinique",
          "region": "Americas",
          "subregion": "Caribbean",
          "timezones": [
              {
                  "zoneName": "America\/Martinique",
                  "gmtOffset": -14400,
                  "gmtOffsetName": "UTC-04:00",
                  "abbreviation": "AST",
                  "tzName": "Atlantic Standard Time"
              }
          ]
      },
      {
          "id": 139,
          "name": "Mauritania",
          "iso3": "MRT",
          "iso2": "MR",
          "numeric_code": "478",
          "phone_code": "222",
          "capital": "Nouakchott",
          "currency": "MRO",
          "currency_symbol": "MRU",
          "tld": ".mr",
          "native": "موريتانيا",
          "region": "Africa",
          "subregion": "Western Africa",
          "timezones": [
              {
                  "zoneName": "Africa\/Nouakchott",
                  "gmtOffset": 0,
                  "gmtOffsetName": "UTC±00",
                  "abbreviation": "GMT",
                  "tzName": "Greenwich Mean Time"
              }
          ]
      },
      {
          "id": 140,
          "name": "Mauritius",
          "iso3": "MUS",
          "iso2": "MU",
          "numeric_code": "480",
          "phone_code": "230",
          "capital": "Port Louis",
          "currency": "MUR",
          "currency_symbol": "₨",
          "tld": ".mu",
          "native": "Maurice",
          "region": "Africa",
          "subregion": "Eastern Africa",
          "timezones": [
              {
                  "zoneName": "Indian\/Mauritius",
                  "gmtOffset": 14400,
                  "gmtOffsetName": "UTC+04:00",
                  "abbreviation": "MUT",
                  "tzName": "Mauritius Time"
              }
          ]
      },
      {
          "id": 141,
          "name": "Mayotte",
          "iso3": "MYT",
          "iso2": "YT",
          "numeric_code": "175",
          "phone_code": "262",
          "capital": "Mamoudzou",
          "currency": "EUR",
          "currency_symbol": "€",
          "tld": ".yt",
          "native": "Mayotte",
          "region": "Africa",
          "subregion": "Eastern Africa",
          "timezones": [
              {
                  "zoneName": "Indian\/Mayotte",
                  "gmtOffset": 10800,
                  "gmtOffsetName": "UTC+03:00",
                  "abbreviation": "EAT",
                  "tzName": "East Africa Time"
              }
          ]
      },
      {
          "id": 142,
          "name": "Mexico",
          "iso3": "MEX",
          "iso2": "MX",
          "numeric_code": "484",
          "phone_code": "52",
          "capital": "Mexico City",
          "currency": "MXN",
          "currency_symbol": "$",
          "tld": ".mx",
          "native": "México",
          "region": "Americas",
          "subregion": "Central America",
          "timezones": [
              {
                  "zoneName": "America\/Bahia_Banderas",
                  "gmtOffset": -21600,
                  "gmtOffsetName": "UTC-06:00",
                  "abbreviation": "CST",
                  "tzName": "Central Standard Time (North America"
              },
              {
                  "zoneName": "America\/Cancun",
                  "gmtOffset": -18000,
                  "gmtOffsetName": "UTC-05:00",
                  "abbreviation": "EST",
                  "tzName": "Eastern Standard Time (North America"
              },
              {
                  "zoneName": "America\/Chihuahua",
                  "gmtOffset": -25200,
                  "gmtOffsetName": "UTC-07:00",
                  "abbreviation": "MST",
                  "tzName": "Mountain Standard Time (North America"
              },
              {
                  "zoneName": "America\/Hermosillo",
                  "gmtOffset": -25200,
                  "gmtOffsetName": "UTC-07:00",
                  "abbreviation": "MST",
                  "tzName": "Mountain Standard Time (North America"
              },
              {
                  "zoneName": "America\/Matamoros",
                  "gmtOffset": -21600,
                  "gmtOffsetName": "UTC-06:00",
                  "abbreviation": "CST",
                  "tzName": "Central Standard Time (North America"
              },
              {
                  "zoneName": "America\/Mazatlan",
                  "gmtOffset": -25200,
                  "gmtOffsetName": "UTC-07:00",
                  "abbreviation": "MST",
                  "tzName": "Mountain Standard Time (North America"
              },
              {
                  "zoneName": "America\/Merida",
                  "gmtOffset": -21600,
                  "gmtOffsetName": "UTC-06:00",
                  "abbreviation": "CST",
                  "tzName": "Central Standard Time (North America"
              },
              {
                  "zoneName": "America\/Mexico_City",
                  "gmtOffset": -21600,
                  "gmtOffsetName": "UTC-06:00",
                  "abbreviation": "CST",
                  "tzName": "Central Standard Time (North America"
              },
              {
                  "zoneName": "America\/Monterrey",
                  "gmtOffset": -21600,
                  "gmtOffsetName": "UTC-06:00",
                  "abbreviation": "CST",
                  "tzName": "Central Standard Time (North America"
              },
              {
                  "zoneName": "America\/Ojinaga",
                  "gmtOffset": -25200,
                  "gmtOffsetName": "UTC-07:00",
                  "abbreviation": "MST",
                  "tzName": "Mountain Standard Time (North America"
              },
              {
                  "zoneName": "America\/Tijuana",
                  "gmtOffset": -28800,
                  "gmtOffsetName": "UTC-08:00",
                  "abbreviation": "PST",
                  "tzName": "Pacific Standard Time (North America"
              }
          ]
      },
      {
          "id": 143,
          "name": "Micronesia",
          "iso3": "FSM",
          "iso2": "FM",
          "numeric_code": "583",
          "phone_code": "691",
          "capital": "Palikir",
          "currency": "USD",
          "currency_symbol": "$",
          "tld": ".fm",
          "native": "Micronesia",
          "region": "Oceania",
          "subregion": "Micronesia",
          "timezones": [
              {
                  "zoneName": "Pacific\/Chuuk",
                  "gmtOffset": 36000,
                  "gmtOffsetName": "UTC+10:00",
                  "abbreviation": "CHUT",
                  "tzName": "Chuuk Time"
              },
              {
                  "zoneName": "Pacific\/Kosrae",
                  "gmtOffset": 39600,
                  "gmtOffsetName": "UTC+11:00",
                  "abbreviation": "KOST",
                  "tzName": "Kosrae Time"
              },
              {
                  "zoneName": "Pacific\/Pohnpei",
                  "gmtOffset": 39600,
                  "gmtOffsetName": "UTC+11:00",
                  "abbreviation": "PONT",
                  "tzName": "Pohnpei Standard Time"
              }
          ]
      },
      {
          "id": 144,
          "name": "Moldova",
          "iso3": "MDA",
          "iso2": "MD",
          "numeric_code": "498",
          "phone_code": "373",
          "capital": "Chisinau",
          "currency": "MDL",
          "currency_symbol": "L",
          "tld": ".md",
          "native": "Moldova",
          "region": "Europe",
          "subregion": "Eastern Europe",
          "timezones": [
              {
                  "zoneName": "Europe\/Chisinau",
                  "gmtOffset": 7200,
                  "gmtOffsetName": "UTC+02:00",
                  "abbreviation": "EET",
                  "tzName": "Eastern European Time"
              }
          ]
      },
      {
          "id": 145,
          "name": "Monaco",
          "iso3": "MCO",
          "iso2": "MC",
          "numeric_code": "492",
          "phone_code": "377",
          "capital": "Monaco",
          "currency": "EUR",
          "currency_symbol": "€",
          "tld": ".mc",
          "native": "Monaco",
          "region": "Europe",
          "subregion": "Western Europe",
          "timezones": [
              {
                  "zoneName": "Europe\/Monaco",
                  "gmtOffset": 3600,
                  "gmtOffsetName": "UTC+01:00",
                  "abbreviation": "CET",
                  "tzName": "Central European Time"
              }
          ]
      },
      {
          "id": 146,
          "name": "Mongolia",
          "iso3": "MNG",
          "iso2": "MN",
          "numeric_code": "496",
          "phone_code": "976",
          "capital": "Ulan Bator",
          "currency": "MNT",
          "currency_symbol": "₮",
          "tld": ".mn",
          "native": "Монгол улс",
          "region": "Asia",
          "subregion": "Eastern Asia",
          "timezones": [
              {
                  "zoneName": "Asia\/Choibalsan",
                  "gmtOffset": 28800,
                  "gmtOffsetName": "UTC+08:00",
                  "abbreviation": "CHOT",
                  "tzName": "Choibalsan Standard Time"
              },
              {
                  "zoneName": "Asia\/Hovd",
                  "gmtOffset": 25200,
                  "gmtOffsetName": "UTC+07:00",
                  "abbreviation": "HOVT",
                  "tzName": "Hovd Time"
              },
              {
                  "zoneName": "Asia\/Ulaanbaatar",
                  "gmtOffset": 28800,
                  "gmtOffsetName": "UTC+08:00",
                  "abbreviation": "ULAT",
                  "tzName": "Ulaanbaatar Standard Time"
              }
          ]
      },
      {
          "id": 147,
          "name": "Montenegro",
          "iso3": "MNE",
          "iso2": "ME",
          "numeric_code": "499",
          "phone_code": "382",
          "capital": "Podgorica",
          "currency": "EUR",
          "currency_symbol": "€",
          "tld": ".me",
          "native": "Црна Гора",
          "region": "Europe",
          "subregion": "Southern Europe",
          "timezones": [
              {
                  "zoneName": "Europe\/Podgorica",
                  "gmtOffset": 3600,
                  "gmtOffsetName": "UTC+01:00",
                  "abbreviation": "CET",
                  "tzName": "Central European Time"
              }
          ]
      },
      {
          "id": 148,
          "name": "Montserrat",
          "iso3": "MSR",
          "iso2": "MS",
          "numeric_code": "500",
          "phone_code": "+1-664",
          "capital": "Plymouth",
          "currency": "XCD",
          "currency_symbol": "$",
          "tld": ".ms",
          "native": "Montserrat",
          "region": "Americas",
          "subregion": "Caribbean",
          "timezones": [
              {
                  "zoneName": "America\/Montserrat",
                  "gmtOffset": -14400,
                  "gmtOffsetName": "UTC-04:00",
                  "abbreviation": "AST",
                  "tzName": "Atlantic Standard Time"
              }
          ]
      },
      {
          "id": 149,
          "name": "Morocco",
          "iso3": "MAR",
          "iso2": "MA",
          "numeric_code": "504",
          "phone_code": "212",
          "capital": "Rabat",
          "currency": "MAD",
          "currency_symbol": "DH",
          "tld": ".ma",
          "native": "المغرب",
          "region": "Africa",
          "subregion": "Northern Africa",
          "timezones": [
              {
                  "zoneName": "Africa\/Casablanca",
                  "gmtOffset": 3600,
                  "gmtOffsetName": "UTC+01:00",
                  "abbreviation": "WEST",
                  "tzName": "Western European Summer Time"
              }
          ]
      },
      {
          "id": 150,
          "name": "Mozambique",
          "iso3": "MOZ",
          "iso2": "MZ",
          "numeric_code": "508",
          "phone_code": "258",
          "capital": "Maputo",
          "currency": "MZN",
          "currency_symbol": "MT",
          "tld": ".mz",
          "native": "Moçambique",
          "region": "Africa",
          "subregion": "Eastern Africa",
          "timezones": [
              {
                  "zoneName": "Africa\/Maputo",
                  "gmtOffset": 7200,
                  "gmtOffsetName": "UTC+02:00",
                  "abbreviation": "CAT",
                  "tzName": "Central Africa Time"
              }
          ]
      },
      {
          "id": 151,
          "name": "Myanmar",
          "iso3": "MMR",
          "iso2": "MM",
          "numeric_code": "104",
          "phone_code": "95",
          "capital": "Nay Pyi Taw",
          "currency": "MMK",
          "currency_symbol": "K",
          "tld": ".mm",
          "native": "မြန်မာ",
          "region": "Asia",
          "subregion": "South-Eastern Asia",
          "timezones": [
              {
                  "zoneName": "Asia\/Yangon",
                  "gmtOffset": 23400,
                  "gmtOffsetName": "UTC+06:30",
                  "abbreviation": "MMT",
                  "tzName": "Myanmar Standard Time"
              }
          ]
      },
      {
          "id": 152,
          "name": "Namibia",
          "iso3": "NAM",
          "iso2": "NA",
          "numeric_code": "516",
          "phone_code": "264",
          "capital": "Windhoek",
          "currency": "NAD",
          "currency_symbol": "$",
          "tld": ".na",
          "native": "Namibia",
          "region": "Africa",
          "subregion": "Southern Africa",
          "timezones": [
              {
                  "zoneName": "Africa\/Windhoek",
                  "gmtOffset": 7200,
                  "gmtOffsetName": "UTC+02:00",
                  "abbreviation": "WAST",
                  "tzName": "West Africa Summer Time"
              }
          ]
      },
      {
          "id": 153,
          "name": "Nauru",
          "iso3": "NRU",
          "iso2": "NR",
          "numeric_code": "520",
          "phone_code": "674",
          "capital": "Yaren",
          "currency": "AUD",
          "currency_symbol": "$",
          "tld": ".nr",
          "native": "Nauru",
          "region": "Oceania",
          "subregion": "Micronesia",
          "timezones": [
              {
                  "zoneName": "Pacific\/Nauru",
                  "gmtOffset": 43200,
                  "gmtOffsetName": "UTC+12:00",
                  "abbreviation": "NRT",
                  "tzName": "Nauru Time"
              }
          ]
      },
      {
          "id": 154,
          "name": "Nepal",
          "iso3": "NPL",
          "iso2": "NP",
          "numeric_code": "524",
          "phone_code": "977",
          "capital": "Kathmandu",
          "currency": "NPR",
          "currency_symbol": "₨",
          "tld": ".np",
          "native": "नपल",
          "region": "Asia",
          "subregion": "Southern Asia",
          "timezones": [
              {
                  "zoneName": "Asia\/Kathmandu",
                  "gmtOffset": 20700,
                  "gmtOffsetName": "UTC+05:45",
                  "abbreviation": "NPT",
                  "tzName": "Nepal Time"
              }
          ]
      },
      {
          "id": 156,
          "name": "Netherlands",
          "iso3": "NLD",
          "iso2": "NL",
          "numeric_code": "528",
          "phone_code": "31",
          "capital": "Amsterdam",
          "currency": "EUR",
          "currency_symbol": "€",
          "tld": ".nl",
          "native": "Nederland",
          "region": "Europe",
          "subregion": "Western Europe",
          "timezones": [
              {
                  "zoneName": "Europe\/Amsterdam",
                  "gmtOffset": 3600,
                  "gmtOffsetName": "UTC+01:00",
                  "abbreviation": "CET",
                  "tzName": "Central European Time"
              }
          ]
      },
      {
          "id": 157,
          "name": "New Caledonia",
          "iso3": "NCL",
          "iso2": "NC",
          "numeric_code": "540",
          "phone_code": "687",
          "capital": "Noumea",
          "currency": "XPF",
          "currency_symbol": "₣",
          "tld": ".nc",
          "native": "Nouvelle-Calédonie",
          "region": "Oceania",
          "subregion": "Melanesia",
          "timezones": [
              {
                  "zoneName": "Pacific\/Noumea",
                  "gmtOffset": 39600,
                  "gmtOffsetName": "UTC+11:00",
                  "abbreviation": "NCT",
                  "tzName": "New Caledonia Time"
              }
          ]
      },
      {
          "id": 158,
          "name": "New Zealand",
          "iso3": "NZL",
          "iso2": "NZ",
          "numeric_code": "554",
          "phone_code": "64",
          "capital": "Wellington",
          "currency": "NZD",
          "currency_symbol": "$",
          "tld": ".nz",
          "native": "New Zealand",
          "region": "Oceania",
          "subregion": "Australia and New Zealand",
          "timezones": [
              {
                  "zoneName": "Pacific\/Auckland",
                  "gmtOffset": 46800,
                  "gmtOffsetName": "UTC+13:00",
                  "abbreviation": "NZDT",
                  "tzName": "New Zealand Daylight Time"
              },
              {
                  "zoneName": "Pacific\/Chatham",
                  "gmtOffset": 49500,
                  "gmtOffsetName": "UTC+13:45",
                  "abbreviation": "CHAST",
                  "tzName": "Chatham Standard Time"
              }
          ]
      },
      {
          "id": 159,
          "name": "Nicaragua",
          "iso3": "NIC",
          "iso2": "NI",
          "numeric_code": "558",
          "phone_code": "505",
          "capital": "Managua",
          "currency": "NIO",
          "currency_symbol": "C$",
          "tld": ".ni",
          "native": "Nicaragua",
          "region": "Americas",
          "subregion": "Central America",
          "timezones": [
              {
                  "zoneName": "America\/Managua",
                  "gmtOffset": -21600,
                  "gmtOffsetName": "UTC-06:00",
                  "abbreviation": "CST",
                  "tzName": "Central Standard Time (North America"
              }
          ]
      },
      {
          "id": 160,
          "name": "Niger",
          "iso3": "NER",
          "iso2": "NE",
          "numeric_code": "562",
          "phone_code": "227",
          "capital": "Niamey",
          "currency": "XOF",
          "currency_symbol": "CFA",
          "tld": ".ne",
          "native": "Niger",
          "region": "Africa",
          "subregion": "Western Africa",
          "timezones": [
              {
                  "zoneName": "Africa\/Niamey",
                  "gmtOffset": 3600,
                  "gmtOffsetName": "UTC+01:00",
                  "abbreviation": "WAT",
                  "tzName": "West Africa Time"
              }
          ]
      },
      {
          "id": 161,
          "name": "Nigeria",
          "iso3": "NGA",
          "iso2": "NG",
          "numeric_code": "566",
          "phone_code": "234",
          "capital": "Abuja",
          "currency": "NGN",
          "currency_symbol": "₦",
          "tld": ".ng",
          "native": "Nigeria",
          "region": "Africa",
          "subregion": "Western Africa",
          "timezones": [
              {
                  "zoneName": "Africa\/Lagos",
                  "gmtOffset": 3600,
                  "gmtOffsetName": "UTC+01:00",
                  "abbreviation": "WAT",
                  "tzName": "West Africa Time"
              }
          ]
      },
      {
          "id": 162,
          "name": "Niue",
          "iso3": "NIU",
          "iso2": "NU",
          "numeric_code": "570",
          "phone_code": "683",
          "capital": "Alofi",
          "currency": "NZD",
          "currency_symbol": "$",
          "tld": ".nu",
          "native": "Niuē",
          "region": "Oceania",
          "subregion": "Polynesia",
          "timezones": [
              {
                  "zoneName": "Pacific\/Niue",
                  "gmtOffset": -39600,
                  "gmtOffsetName": "UTC-11:00",
                  "abbreviation": "NUT",
                  "tzName": "Niue Time"
              }
          ]
      },
      {
          "id": 163,
          "name": "Norfolk Island",
          "iso3": "NFK",
          "iso2": "NF",
          "numeric_code": "574",
          "phone_code": "672",
          "capital": "Kingston",
          "currency": "AUD",
          "currency_symbol": "$",
          "tld": ".nf",
          "native": "Norfolk Island",
          "region": "Oceania",
          "subregion": "Australia and New Zealand",
          "timezones": [
              {
                  "zoneName": "Pacific\/Norfolk",
                  "gmtOffset": 43200,
                  "gmtOffsetName": "UTC+12:00",
                  "abbreviation": "NFT",
                  "tzName": "Norfolk Time"
              }
          ]
      },
      {
          "id": 115,
          "name": "North Korea",
          "iso3": "PRK",
          "iso2": "KP",
          "numeric_code": "408",
          "phone_code": "850",
          "capital": "Pyongyang",
          "currency": "KPW",
          "currency_symbol": "₩",
          "tld": ".kp",
          "native": "북한",
          "region": "Asia",
          "subregion": "Eastern Asia",
          "timezones": [
              {
                  "zoneName": "Asia\/Pyongyang",
                  "gmtOffset": 32400,
                  "gmtOffsetName": "UTC+09:00",
                  "abbreviation": "KST",
                  "tzName": "Korea Standard Time"
              }
          ]
      },
      {
          "id": 164,
          "name": "Northern Mariana Islands",
          "iso3": "MNP",
          "iso2": "MP",
          "numeric_code": "580",
          "phone_code": "+1-670",
          "capital": "Saipan",
          "currency": "USD",
          "currency_symbol": "$",
          "tld": ".mp",
          "native": "Northern Mariana Islands",
          "region": "Oceania",
          "subregion": "Micronesia",
          "timezones": [
              {
                  "zoneName": "Pacific\/Saipan",
                  "gmtOffset": 36000,
                  "gmtOffsetName": "UTC+10:00",
                  "abbreviation": "ChST",
                  "tzName": "Chamorro Standard Time"
              }
          ]
      },
      {
          "id": 165,
          "name": "Norway",
          "iso3": "NOR",
          "iso2": "NO",
          "numeric_code": "578",
          "phone_code": "47",
          "capital": "Oslo",
          "currency": "NOK",
          "currency_symbol": "kr",
          "tld": ".no",
          "native": "Norge",
          "region": "Europe",
          "subregion": "Northern Europe",
          "timezones": [
              {
                  "zoneName": "Europe\/Oslo",
                  "gmtOffset": 3600,
                  "gmtOffsetName": "UTC+01:00",
                  "abbreviation": "CET",
                  "tzName": "Central European Time"
              }
          ]
      },
      {
          "id": 166,
          "name": "Oman",
          "iso3": "OMN",
          "iso2": "OM",
          "numeric_code": "512",
          "phone_code": "968",
          "capital": "Muscat",
          "currency": "OMR",
          "currency_symbol": ".ع.ر",
          "tld": ".om",
          "native": "عمان",
          "region": "Asia",
          "subregion": "Western Asia",
          "timezones": [
              {
                  "zoneName": "Asia\/Muscat",
                  "gmtOffset": 14400,
                  "gmtOffsetName": "UTC+04:00",
                  "abbreviation": "GST",
                  "tzName": "Gulf Standard Time"
              }
          ]
      },
      {
          "id": 167,
          "name": "Pakistan",
          "iso3": "PAK",
          "iso2": "PK",
          "numeric_code": "586",
          "phone_code": "92",
          "capital": "Islamabad",
          "currency": "PKR",
          "currency_symbol": "₨",
          "tld": ".pk",
          "native": "Pakistan",
          "region": "Asia",
          "subregion": "Southern Asia",
          "timezones": [
              {
                  "zoneName": "Asia\/Karachi",
                  "gmtOffset": 18000,
                  "gmtOffsetName": "UTC+05:00",
                  "abbreviation": "PKT",
                  "tzName": "Pakistan Standard Time"
              }
          ]
      },
      {
          "id": 168,
          "name": "Palau",
          "iso3": "PLW",
          "iso2": "PW",
          "numeric_code": "585",
          "phone_code": "680",
          "capital": "Melekeok",
          "currency": "USD",
          "currency_symbol": "$",
          "tld": ".pw",
          "native": "Palau",
          "region": "Oceania",
          "subregion": "Micronesia",
          "timezones": [
              {
                  "zoneName": "Pacific\/Palau",
                  "gmtOffset": 32400,
                  "gmtOffsetName": "UTC+09:00",
                  "abbreviation": "PWT",
                  "tzName": "Palau Time"
              }
          ]
      },
      {
          "id": 169,
          "name": "Palestinian Territory Occupied",
          "iso3": "PSE",
          "iso2": "PS",
          "numeric_code": "275",
          "phone_code": "970",
          "capital": "East Jerusalem",
          "currency": "ILS",
          "currency_symbol": "₪",
          "tld": ".ps",
          "native": "فلسطين",
          "region": "Asia",
          "subregion": "Western Asia",
          "timezones": [
              {
                  "zoneName": "Asia\/Gaza",
                  "gmtOffset": 7200,
                  "gmtOffsetName": "UTC+02:00",
                  "abbreviation": "EET",
                  "tzName": "Eastern European Time"
              },
              {
                  "zoneName": "Asia\/Hebron",
                  "gmtOffset": 7200,
                  "gmtOffsetName": "UTC+02:00",
                  "abbreviation": "EET",
                  "tzName": "Eastern European Time"
              }
          ]
      },
      {
          "id": 170,
          "name": "Panama",
          "iso3": "PAN",
          "iso2": "PA",
          "numeric_code": "591",
          "phone_code": "507",
          "capital": "Panama City",
          "currency": "PAB",
          "currency_symbol": "B\/.",
          "tld": ".pa",
          "native": "Panamá",
          "region": "Americas",
          "subregion": "Central America",
          "timezones": [
              {
                  "zoneName": "America\/Panama",
                  "gmtOffset": -18000,
                  "gmtOffsetName": "UTC-05:00",
                  "abbreviation": "EST",
                  "tzName": "Eastern Standard Time (North America"
              }
          ]
      },
      {
          "id": 171,
          "name": "Papua new Guinea",
          "iso3": "PNG",
          "iso2": "PG",
          "numeric_code": "598",
          "phone_code": "675",
          "capital": "Port Moresby",
          "currency": "PGK",
          "currency_symbol": "K",
          "tld": ".pg",
          "native": "Papua Niugini",
          "region": "Oceania",
          "subregion": "Melanesia",
          "timezones": [
              {
                  "zoneName": "Pacific\/Bougainville",
                  "gmtOffset": 39600,
                  "gmtOffsetName": "UTC+11:00",
                  "abbreviation": "BST",
                  "tzName": "Bougainville Standard Time[6"
              },
              {
                  "zoneName": "Pacific\/Port_Moresby",
                  "gmtOffset": 36000,
                  "gmtOffsetName": "UTC+10:00",
                  "abbreviation": "PGT",
                  "tzName": "Papua New Guinea Time"
              }
          ]
      },
      {
          "id": 172,
          "name": "Paraguay",
          "iso3": "PRY",
          "iso2": "PY",
          "numeric_code": "600",
          "phone_code": "595",
          "capital": "Asuncion",
          "currency": "PYG",
          "currency_symbol": "₲",
          "tld": ".py",
          "native": "Paraguay",
          "region": "Americas",
          "subregion": "South America",
          "timezones": [
              {
                  "zoneName": "America\/Asuncion",
                  "gmtOffset": -10800,
                  "gmtOffsetName": "UTC-03:00",
                  "abbreviation": "PYST",
                  "tzName": "Paraguay Summer Time"
              }
          ]
      },
      {
          "id": 173,
          "name": "Peru",
          "iso3": "PER",
          "iso2": "PE",
          "numeric_code": "604",
          "phone_code": "51",
          "capital": "Lima",
          "currency": "PEN",
          "currency_symbol": "S\/.",
          "tld": ".pe",
          "native": "Perú",
          "region": "Americas",
          "subregion": "South America",
          "timezones": [
              {
                  "zoneName": "America\/Lima",
                  "gmtOffset": -18000,
                  "gmtOffsetName": "UTC-05:00",
                  "abbreviation": "PET",
                  "tzName": "Peru Time"
              }
          ]
      },
      {
          "id": 174,
          "name": "Philippines",
          "iso3": "PHL",
          "iso2": "PH",
          "numeric_code": "608",
          "phone_code": "63",
          "capital": "Manila",
          "currency": "PHP",
          "currency_symbol": "₱",
          "tld": ".ph",
          "native": "Pilipinas",
          "region": "Asia",
          "subregion": "South-Eastern Asia",
          "timezones": [
              {
                  "zoneName": "Asia\/Manila",
                  "gmtOffset": 28800,
                  "gmtOffsetName": "UTC+08:00",
                  "abbreviation": "PHT",
                  "tzName": "Philippine Time"
              }
          ]
      },
      {
          "id": 175,
          "name": "Pitcairn Island",
          "iso3": "PCN",
          "iso2": "PN",
          "numeric_code": "612",
          "phone_code": "870",
          "capital": "Adamstown",
          "currency": "NZD",
          "currency_symbol": "$",
          "tld": ".pn",
          "native": "Pitcairn Islands",
          "region": "Oceania",
          "subregion": "Polynesia",
          "timezones": [
              {
                  "zoneName": "Pacific\/Pitcairn",
                  "gmtOffset": -28800,
                  "gmtOffsetName": "UTC-08:00",
                  "abbreviation": "PST",
                  "tzName": "Pacific Standard Time (North America"
              }
          ]
      },
      {
          "id": 176,
          "name": "Poland",
          "iso3": "POL",
          "iso2": "PL",
          "numeric_code": "616",
          "phone_code": "48",
          "capital": "Warsaw",
          "currency": "PLN",
          "currency_symbol": "zł",
          "tld": ".pl",
          "native": "Polska",
          "region": "Europe",
          "subregion": "Eastern Europe",
          "timezones": [
              {
                  "zoneName": "Europe\/Warsaw",
                  "gmtOffset": 3600,
                  "gmtOffsetName": "UTC+01:00",
                  "abbreviation": "CET",
                  "tzName": "Central European Time"
              }
          ]
      },
      {
          "id": 177,
          "name": "Portugal",
          "iso3": "PRT",
          "iso2": "PT",
          "numeric_code": "620",
          "phone_code": "351",
          "capital": "Lisbon",
          "currency": "EUR",
          "currency_symbol": "€",
          "tld": ".pt",
          "native": "Portugal",
          "region": "Europe",
          "subregion": "Southern Europe",
          "timezones": [
              {
                  "zoneName": "Atlantic\/Azores",
                  "gmtOffset": -3600,
                  "gmtOffsetName": "UTC-01:00",
                  "abbreviation": "AZOT",
                  "tzName": "Azores Standard Time"
              },
              {
                  "zoneName": "Atlantic\/Madeira",
                  "gmtOffset": 0,
                  "gmtOffsetName": "UTC±00",
                  "abbreviation": "WET",
                  "tzName": "Western European Time"
              },
              {
                  "zoneName": "Europe\/Lisbon",
                  "gmtOffset": 0,
                  "gmtOffsetName": "UTC±00",
                  "abbreviation": "WET",
                  "tzName": "Western European Time"
              }
          ]
      },
      {
          "id": 178,
          "name": "Puerto Rico",
          "iso3": "PRI",
          "iso2": "PR",
          "numeric_code": "630",
          "phone_code": "+1-787 and 1-939",
          "capital": "San Juan",
          "currency": "USD",
          "currency_symbol": "$",
          "tld": ".pr",
          "native": "Puerto Rico",
          "region": "Americas",
          "subregion": "Caribbean",
          "timezones": [
              {
                  "zoneName": "America\/Puerto_Rico",
                  "gmtOffset": -14400,
                  "gmtOffsetName": "UTC-04:00",
                  "abbreviation": "AST",
                  "tzName": "Atlantic Standard Time"
              }
          ]
      },
      {
          "id": 179,
          "name": "Qatar",
          "iso3": "QAT",
          "iso2": "QA",
          "numeric_code": "634",
          "phone_code": "974",
          "capital": "Doha",
          "currency": "QAR",
          "currency_symbol": "ق.ر",
          "tld": ".qa",
          "native": "قطر",
          "region": "Asia",
          "subregion": "Western Asia",
          "timezones": [
              {
                  "zoneName": "Asia\/Qatar",
                  "gmtOffset": 10800,
                  "gmtOffsetName": "UTC+03:00",
                  "abbreviation": "AST",
                  "tzName": "Arabia Standard Time"
              }
          ]
      },
      {
          "id": 180,
          "name": "Reunion",
          "iso3": "REU",
          "iso2": "RE",
          "numeric_code": "638",
          "phone_code": "262",
          "capital": "Saint-Denis",
          "currency": "EUR",
          "currency_symbol": "€",
          "tld": ".re",
          "native": "La Réunion",
          "region": "Africa",
          "subregion": "Eastern Africa",
          "timezones": [
              {
                  "zoneName": "Indian\/Reunion",
                  "gmtOffset": 14400,
                  "gmtOffsetName": "UTC+04:00",
                  "abbreviation": "RET",
                  "tzName": "Réunion Time"
              }
          ]
      },
      {
          "id": 181,
          "name": "Romania",
          "iso3": "ROU",
          "iso2": "RO",
          "numeric_code": "642",
          "phone_code": "40",
          "capital": "Bucharest",
          "currency": "RON",
          "currency_symbol": "lei",
          "tld": ".ro",
          "native": "România",
          "region": "Europe",
          "subregion": "Eastern Europe",
          "timezones": [
              {
                  "zoneName": "Europe\/Bucharest",
                  "gmtOffset": 7200,
                  "gmtOffsetName": "UTC+02:00",
                  "abbreviation": "EET",
                  "tzName": "Eastern European Time"
              }
          ]
      },
      {
          "id": 182,
          "name": "Russia",
          "iso3": "RUS",
          "iso2": "RU",
          "numeric_code": "643",
          "phone_code": "7",
          "capital": "Moscow",
          "currency": "RUB",
          "currency_symbol": "₽",
          "tld": ".ru",
          "native": "Россия",
          "region": "Europe",
          "subregion": "Eastern Europe",
          "timezones": [
              {
                  "zoneName": "Asia\/Anadyr",
                  "gmtOffset": 43200,
                  "gmtOffsetName": "UTC+12:00",
                  "abbreviation": "ANAT",
                  "tzName": "Anadyr Time[4"
              },
              {
                  "zoneName": "Asia\/Barnaul",
                  "gmtOffset": 25200,
                  "gmtOffsetName": "UTC+07:00",
                  "abbreviation": "KRAT",
                  "tzName": "Krasnoyarsk Time"
              },
              {
                  "zoneName": "Asia\/Chita",
                  "gmtOffset": 32400,
                  "gmtOffsetName": "UTC+09:00",
                  "abbreviation": "YAKT",
                  "tzName": "Yakutsk Time"
              },
              {
                  "zoneName": "Asia\/Irkutsk",
                  "gmtOffset": 28800,
                  "gmtOffsetName": "UTC+08:00",
                  "abbreviation": "IRKT",
                  "tzName": "Irkutsk Time"
              },
              {
                  "zoneName": "Asia\/Kamchatka",
                  "gmtOffset": 43200,
                  "gmtOffsetName": "UTC+12:00",
                  "abbreviation": "PETT",
                  "tzName": "Kamchatka Time"
              },
              {
                  "zoneName": "Asia\/Khandyga",
                  "gmtOffset": 32400,
                  "gmtOffsetName": "UTC+09:00",
                  "abbreviation": "YAKT",
                  "tzName": "Yakutsk Time"
              },
              {
                  "zoneName": "Asia\/Krasnoyarsk",
                  "gmtOffset": 25200,
                  "gmtOffsetName": "UTC+07:00",
                  "abbreviation": "KRAT",
                  "tzName": "Krasnoyarsk Time"
              },
              {
                  "zoneName": "Asia\/Magadan",
                  "gmtOffset": 39600,
                  "gmtOffsetName": "UTC+11:00",
                  "abbreviation": "MAGT",
                  "tzName": "Magadan Time"
              },
              {
                  "zoneName": "Asia\/Novokuznetsk",
                  "gmtOffset": 25200,
                  "gmtOffsetName": "UTC+07:00",
                  "abbreviation": "KRAT",
                  "tzName": "Krasnoyarsk Time"
              },
              {
                  "zoneName": "Asia\/Novosibirsk",
                  "gmtOffset": 25200,
                  "gmtOffsetName": "UTC+07:00",
                  "abbreviation": "NOVT",
                  "tzName": "Novosibirsk Time"
              },
              {
                  "zoneName": "Asia\/Omsk",
                  "gmtOffset": 21600,
                  "gmtOffsetName": "UTC+06:00",
                  "abbreviation": "OMST",
                  "tzName": "Omsk Time"
              },
              {
                  "zoneName": "Asia\/Sakhalin",
                  "gmtOffset": 39600,
                  "gmtOffsetName": "UTC+11:00",
                  "abbreviation": "SAKT",
                  "tzName": "Sakhalin Island Time"
              },
              {
                  "zoneName": "Asia\/Srednekolymsk",
                  "gmtOffset": 39600,
                  "gmtOffsetName": "UTC+11:00",
                  "abbreviation": "SRET",
                  "tzName": "Srednekolymsk Time"
              },
              {
                  "zoneName": "Asia\/Tomsk",
                  "gmtOffset": 25200,
                  "gmtOffsetName": "UTC+07:00",
                  "abbreviation": "MSD+3",
                  "tzName": "Moscow Daylight Time+3"
              },
              {
                  "zoneName": "Asia\/Ust-Nera",
                  "gmtOffset": 36000,
                  "gmtOffsetName": "UTC+10:00",
                  "abbreviation": "VLAT",
                  "tzName": "Vladivostok Time"
              },
              {
                  "zoneName": "Asia\/Vladivostok",
                  "gmtOffset": 36000,
                  "gmtOffsetName": "UTC+10:00",
                  "abbreviation": "VLAT",
                  "tzName": "Vladivostok Time"
              },
              {
                  "zoneName": "Asia\/Yakutsk",
                  "gmtOffset": 32400,
                  "gmtOffsetName": "UTC+09:00",
                  "abbreviation": "YAKT",
                  "tzName": "Yakutsk Time"
              },
              {
                  "zoneName": "Asia\/Yekaterinburg",
                  "gmtOffset": 18000,
                  "gmtOffsetName": "UTC+05:00",
                  "abbreviation": "YEKT",
                  "tzName": "Yekaterinburg Time"
              },
              {
                  "zoneName": "Europe\/Astrakhan",
                  "gmtOffset": 14400,
                  "gmtOffsetName": "UTC+04:00",
                  "abbreviation": "SAMT",
                  "tzName": "Samara Time"
              },
              {
                  "zoneName": "Europe\/Kaliningrad",
                  "gmtOffset": 7200,
                  "gmtOffsetName": "UTC+02:00",
                  "abbreviation": "EET",
                  "tzName": "Eastern European Time"
              },
              {
                  "zoneName": "Europe\/Kirov",
                  "gmtOffset": 10800,
                  "gmtOffsetName": "UTC+03:00",
                  "abbreviation": "MSK",
                  "tzName": "Moscow Time"
              },
              {
                  "zoneName": "Europe\/Moscow",
                  "gmtOffset": 10800,
                  "gmtOffsetName": "UTC+03:00",
                  "abbreviation": "MSK",
                  "tzName": "Moscow Time"
              },
              {
                  "zoneName": "Europe\/Samara",
                  "gmtOffset": 14400,
                  "gmtOffsetName": "UTC+04:00",
                  "abbreviation": "SAMT",
                  "tzName": "Samara Time"
              },
              {
                  "zoneName": "Europe\/Saratov",
                  "gmtOffset": 14400,
                  "gmtOffsetName": "UTC+04:00",
                  "abbreviation": "MSD",
                  "tzName": "Moscow Daylight Time+4"
              },
              {
                  "zoneName": "Europe\/Ulyanovsk",
                  "gmtOffset": 14400,
                  "gmtOffsetName": "UTC+04:00",
                  "abbreviation": "SAMT",
                  "tzName": "Samara Time"
              },
              {
                  "zoneName": "Europe\/Volgograd",
                  "gmtOffset": 14400,
                  "gmtOffsetName": "UTC+04:00",
                  "abbreviation": "MSK",
                  "tzName": "Moscow Standard Time"
              }
          ]
      },
      {
          "id": 183,
          "name": "Rwanda",
          "iso3": "RWA",
          "iso2": "RW",
          "numeric_code": "646",
          "phone_code": "250",
          "capital": "Kigali",
          "currency": "RWF",
          "currency_symbol": "FRw",
          "tld": ".rw",
          "native": "Rwanda",
          "region": "Africa",
          "subregion": "Eastern Africa",
          "timezones": [
              {
                  "zoneName": "Africa\/Kigali",
                  "gmtOffset": 7200,
                  "gmtOffsetName": "UTC+02:00",
                  "abbreviation": "CAT",
                  "tzName": "Central Africa Time"
              }
          ]
      },
      {
          "id": 184,
          "name": "Saint Helena",
          "iso3": "SHN",
          "iso2": "SH",
          "numeric_code": "654",
          "phone_code": "290",
          "capital": "Jamestown",
          "currency": "SHP",
          "currency_symbol": "£",
          "tld": ".sh",
          "native": "Saint Helena",
          "region": "Africa",
          "subregion": "Western Africa",
          "timezones": [
              {
                  "zoneName": "Atlantic\/St_Helena",
                  "gmtOffset": 0,
                  "gmtOffsetName": "UTC±00",
                  "abbreviation": "GMT",
                  "tzName": "Greenwich Mean Time"
              }
          ]
      },
      {
          "id": 185,
          "name": "Saint Kitts And Nevis",
          "iso3": "KNA",
          "iso2": "KN",
          "numeric_code": "659",
          "phone_code": "+1-869",
          "capital": "Basseterre",
          "currency": "XCD",
          "currency_symbol": "$",
          "tld": ".kn",
          "native": "Saint Kitts and Nevis",
          "region": "Americas",
          "subregion": "Caribbean",
          "timezones": [
              {
                  "zoneName": "America\/St_Kitts",
                  "gmtOffset": -14400,
                  "gmtOffsetName": "UTC-04:00",
                  "abbreviation": "AST",
                  "tzName": "Atlantic Standard Time"
              }
          ]
      },
      {
          "id": 186,
          "name": "Saint Lucia",
          "iso3": "LCA",
          "iso2": "LC",
          "numeric_code": "662",
          "phone_code": "+1-758",
          "capital": "Castries",
          "currency": "XCD",
          "currency_symbol": "$",
          "tld": ".lc",
          "native": "Saint Lucia",
          "region": "Americas",
          "subregion": "Caribbean",
          "timezones": [
              {
                  "zoneName": "America\/St_Lucia",
                  "gmtOffset": -14400,
                  "gmtOffsetName": "UTC-04:00",
                  "abbreviation": "AST",
                  "tzName": "Atlantic Standard Time"
              }
          ]
      },
      {
          "id": 187,
          "name": "Saint Pierre and Miquelon",
          "iso3": "SPM",
          "iso2": "PM",
          "numeric_code": "666",
          "phone_code": "508",
          "capital": "Saint-Pierre",
          "currency": "EUR",
          "currency_symbol": "€",
          "tld": ".pm",
          "native": "Saint-Pierre-et-Miquelon",
          "region": "Americas",
          "subregion": "Northern America",
          "timezones": [
              {
                  "zoneName": "America\/Miquelon",
                  "gmtOffset": -10800,
                  "gmtOffsetName": "UTC-03:00",
                  "abbreviation": "PMDT",
                  "tzName": "Pierre & Miquelon Daylight Time"
              }
          ]
      },
      {
          "id": 188,
          "name": "Saint Vincent And The Grenadines",
          "iso3": "VCT",
          "iso2": "VC",
          "numeric_code": "670",
          "phone_code": "+1-784",
          "capital": "Kingstown",
          "currency": "XCD",
          "currency_symbol": "$",
          "tld": ".vc",
          "native": "Saint Vincent and the Grenadines",
          "region": "Americas",
          "subregion": "Caribbean",
          "timezones": [
              {
                  "zoneName": "America\/St_Vincent",
                  "gmtOffset": -14400,
                  "gmtOffsetName": "UTC-04:00",
                  "abbreviation": "AST",
                  "tzName": "Atlantic Standard Time"
              }
          ]
      },
      {
          "id": 189,
          "name": "Saint-Barthelemy",
          "iso3": "BLM",
          "iso2": "BL",
          "numeric_code": "652",
          "phone_code": "590",
          "capital": "Gustavia",
          "currency": "EUR",
          "currency_symbol": "€",
          "tld": ".bl",
          "native": "Saint-Barthélemy",
          "region": "Americas",
          "subregion": "Caribbean",
          "timezones": [
              {
                  "zoneName": "America\/St_Barthelemy",
                  "gmtOffset": -14400,
                  "gmtOffsetName": "UTC-04:00",
                  "abbreviation": "AST",
                  "tzName": "Atlantic Standard Time"
              }
          ]
      },
      {
          "id": 190,
          "name": "Saint-Martin (French part)",
          "iso3": "MAF",
          "iso2": "MF",
          "numeric_code": "663",
          "phone_code": "590",
          "capital": "Marigot",
          "currency": "EUR",
          "currency_symbol": "€",
          "tld": ".mf",
          "native": "Saint-Martin",
          "region": "Americas",
          "subregion": "Caribbean",
          "timezones": [
              {
                  "zoneName": "America\/Marigot",
                  "gmtOffset": -14400,
                  "gmtOffsetName": "UTC-04:00",
                  "abbreviation": "AST",
                  "tzName": "Atlantic Standard Time"
              }
          ]
      },
      {
          "id": 191,
          "name": "Samoa",
          "iso3": "WSM",
          "iso2": "WS",
          "numeric_code": "882",
          "phone_code": "685",
          "capital": "Apia",
          "currency": "WST",
          "currency_symbol": "SAT",
          "tld": ".ws",
          "native": "Samoa",
          "region": "Oceania",
          "subregion": "Polynesia",
          "timezones": [
              {
                  "zoneName": "Pacific\/Apia",
                  "gmtOffset": 50400,
                  "gmtOffsetName": "UTC+14:00",
                  "abbreviation": "WST",
                  "tzName": "West Samoa Time"
              }
          ]
      },
      {
          "id": 192,
          "name": "San Marino",
          "iso3": "SMR",
          "iso2": "SM",
          "numeric_code": "674",
          "phone_code": "378",
          "capital": "San Marino",
          "currency": "EUR",
          "currency_symbol": "€",
          "tld": ".sm",
          "native": "San Marino",
          "region": "Europe",
          "subregion": "Southern Europe",
          "timezones": [
              {
                  "zoneName": "Europe\/San_Marino",
                  "gmtOffset": 3600,
                  "gmtOffsetName": "UTC+01:00",
                  "abbreviation": "CET",
                  "tzName": "Central European Time"
              }
          ]
      },
      {
          "id": 193,
          "name": "Sao Tome and Principe",
          "iso3": "STP",
          "iso2": "ST",
          "numeric_code": "678",
          "phone_code": "239",
          "capital": "Sao Tome",
          "currency": "STD",
          "currency_symbol": "Db",
          "tld": ".st",
          "native": "São Tomé e Príncipe",
          "region": "Africa",
          "subregion": "Middle Africa",
          "timezones": [
              {
                  "zoneName": "Africa\/Sao_Tome",
                  "gmtOffset": 0,
                  "gmtOffsetName": "UTC±00",
                  "abbreviation": "GMT",
                  "tzName": "Greenwich Mean Time"
              }
          ]
      },
      {
          "id": 194,
          "name": "Saudi Arabia",
          "iso3": "SAU",
          "iso2": "SA",
          "numeric_code": "682",
          "phone_code": "966",
          "capital": "Riyadh",
          "currency": "SAR",
          "currency_symbol": "﷼",
          "tld": ".sa",
          "native": "العربية السعودية",
          "region": "Asia",
          "subregion": "Western Asia",
          "timezones": [
              {
                  "zoneName": "Asia\/Riyadh",
                  "gmtOffset": 10800,
                  "gmtOffsetName": "UTC+03:00",
                  "abbreviation": "AST",
                  "tzName": "Arabia Standard Time"
              }
          ]
      },
      {
          "id": 195,
          "name": "Senegal",
          "iso3": "SEN",
          "iso2": "SN",
          "numeric_code": "686",
          "phone_code": "221",
          "capital": "Dakar",
          "currency": "XOF",
          "currency_symbol": "CFA",
          "tld": ".sn",
          "native": "Sénégal",
          "region": "Africa",
          "subregion": "Western Africa",
          "timezones": [
              {
                  "zoneName": "Africa\/Dakar",
                  "gmtOffset": 0,
                  "gmtOffsetName": "UTC±00",
                  "abbreviation": "GMT",
                  "tzName": "Greenwich Mean Time"
              }
          ]
      },
      {
          "id": 196,
          "name": "Serbia",
          "iso3": "SRB",
          "iso2": "RS",
          "numeric_code": "688",
          "phone_code": "381",
          "capital": "Belgrade",
          "currency": "RSD",
          "currency_symbol": "din",
          "tld": ".rs",
          "native": "Србија",
          "region": "Europe",
          "subregion": "Southern Europe",
          "timezones": [
              {
                  "zoneName": "Europe\/Belgrade",
                  "gmtOffset": 3600,
                  "gmtOffsetName": "UTC+01:00",
                  "abbreviation": "CET",
                  "tzName": "Central European Time"
              }
          ]
      },
      {
          "id": 197,
          "name": "Seychelles",
          "iso3": "SYC",
          "iso2": "SC",
          "numeric_code": "690",
          "phone_code": "248",
          "capital": "Victoria",
          "currency": "SCR",
          "currency_symbol": "SRe",
          "tld": ".sc",
          "native": "Seychelles",
          "region": "Africa",
          "subregion": "Eastern Africa",
          "timezones": [
              {
                  "zoneName": "Indian\/Mahe",
                  "gmtOffset": 14400,
                  "gmtOffsetName": "UTC+04:00",
                  "abbreviation": "SCT",
                  "tzName": "Seychelles Time"
              }
          ]
      },
      {
          "id": 198,
          "name": "Sierra Leone",
          "iso3": "SLE",
          "iso2": "SL",
          "numeric_code": "694",
          "phone_code": "232",
          "capital": "Freetown",
          "currency": "SLL",
          "currency_symbol": "Le",
          "tld": ".sl",
          "native": "Sierra Leone",
          "region": "Africa",
          "subregion": "Western Africa",
          "timezones": [
              {
                  "zoneName": "Africa\/Freetown",
                  "gmtOffset": 0,
                  "gmtOffsetName": "UTC±00",
                  "abbreviation": "GMT",
                  "tzName": "Greenwich Mean Time"
              }
          ]
      },
      {
          "id": 199,
          "name": "Singapore",
          "iso3": "SGP",
          "iso2": "SG",
          "numeric_code": "702",
          "phone_code": "65",
          "capital": "Singapur",
          "currency": "SGD",
          "currency_symbol": "$",
          "tld": ".sg",
          "native": "Singapore",
          "region": "Asia",
          "subregion": "South-Eastern Asia",
          "timezones": [
              {
                  "zoneName": "Asia\/Singapore",
                  "gmtOffset": 28800,
                  "gmtOffsetName": "UTC+08:00",
                  "abbreviation": "SGT",
                  "tzName": "Singapore Time"
              }
          ]
      },
      {
          "id": 250,
          "name": "Sint Maarten (Dutch part)",
          "iso3": "SXM",
          "iso2": "SX",
          "numeric_code": "534",
          "phone_code": "1721",
          "capital": "Philipsburg",
          "currency": "ANG",
          "currency_symbol": "ƒ",
          "tld": ".sx",
          "native": "Sint Maarten",
          "region": "Americas",
          "subregion": "Caribbean",
          "timezones": [
              {
                  "zoneName": "America\/Anguilla",
                  "gmtOffset": -14400,
                  "gmtOffsetName": "UTC-04:00",
                  "abbreviation": "AST",
                  "tzName": "Atlantic Standard Time"
              }
          ]
      },
      {
          "id": 200,
          "name": "Slovakia",
          "iso3": "SVK",
          "iso2": "SK",
          "numeric_code": "703",
          "phone_code": "421",
          "capital": "Bratislava",
          "currency": "EUR",
          "currency_symbol": "€",
          "tld": ".sk",
          "native": "Slovensko",
          "region": "Europe",
          "subregion": "Eastern Europe",
          "timezones": [
              {
                  "zoneName": "Europe\/Bratislava",
                  "gmtOffset": 3600,
                  "gmtOffsetName": "UTC+01:00",
                  "abbreviation": "CET",
                  "tzName": "Central European Time"
              }
          ]
      },
      {
          "id": 201,
          "name": "Slovenia",
          "iso3": "SVN",
          "iso2": "SI",
          "numeric_code": "705",
          "phone_code": "386",
          "capital": "Ljubljana",
          "currency": "EUR",
          "currency_symbol": "€",
          "tld": ".si",
          "native": "Slovenija",
          "region": "Europe",
          "subregion": "Southern Europe",
          "timezones": [
              {
                  "zoneName": "Europe\/Ljubljana",
                  "gmtOffset": 3600,
                  "gmtOffsetName": "UTC+01:00",
                  "abbreviation": "CET",
                  "tzName": "Central European Time"
              }
          ]
      },
      {
          "id": 202,
          "name": "Solomon Islands",
          "iso3": "SLB",
          "iso2": "SB",
          "numeric_code": "090",
          "phone_code": "677",
          "capital": "Honiara",
          "currency": "SBD",
          "currency_symbol": "Si$",
          "tld": ".sb",
          "native": "Solomon Islands",
          "region": "Oceania",
          "subregion": "Melanesia",
          "timezones": [
              {
                  "zoneName": "Pacific\/Guadalcanal",
                  "gmtOffset": 39600,
                  "gmtOffsetName": "UTC+11:00",
                  "abbreviation": "SBT",
                  "tzName": "Solomon Islands Time"
              }
          ]
      },
      {
          "id": 203,
          "name": "Somalia",
          "iso3": "SOM",
          "iso2": "SO",
          "numeric_code": "706",
          "phone_code": "252",
          "capital": "Mogadishu",
          "currency": "SOS",
          "currency_symbol": "Sh.so.",
          "tld": ".so",
          "native": "Soomaaliya",
          "region": "Africa",
          "subregion": "Eastern Africa",
          "timezones": [
              {
                  "zoneName": "Africa\/Mogadishu",
                  "gmtOffset": 10800,
                  "gmtOffsetName": "UTC+03:00",
                  "abbreviation": "EAT",
                  "tzName": "East Africa Time"
              }
          ]
      },
      {
          "id": 204,
          "name": "South Africa",
          "iso3": "ZAF",
          "iso2": "ZA",
          "numeric_code": "710",
          "phone_code": "27",
          "capital": "Pretoria",
          "currency": "ZAR",
          "currency_symbol": "R",
          "tld": ".za",
          "native": "South Africa",
          "region": "Africa",
          "subregion": "Southern Africa",
          "timezones": [
              {
                  "zoneName": "Africa\/Johannesburg",
                  "gmtOffset": 7200,
                  "gmtOffsetName": "UTC+02:00",
                  "abbreviation": "SAST",
                  "tzName": "South African Standard Time"
              }
          ]
      },
      {
          "id": 205,
          "name": "South Georgia",
          "iso3": "SGS",
          "iso2": "GS",
          "numeric_code": "239",
          "phone_code": "500",
          "capital": "Grytviken",
          "currency": "GBP",
          "currency_symbol": "£",
          "tld": ".gs",
          "native": "South Georgia",
          "region": "Americas",
          "subregion": "South America",
          "timezones": [
              {
                  "zoneName": "Atlantic\/South_Georgia",
                  "gmtOffset": -7200,
                  "gmtOffsetName": "UTC-02:00",
                  "abbreviation": "GST",
                  "tzName": "South Georgia and the South Sandwich Islands Time"
              }
          ]
      },
      {
          "id": 116,
          "name": "South Korea",
          "iso3": "KOR",
          "iso2": "KR",
          "numeric_code": "410",
          "phone_code": "82",
          "capital": "Seoul",
          "currency": "KRW",
          "currency_symbol": "₩",
          "tld": ".kr",
          "native": "대한민국",
          "region": "Asia",
          "subregion": "Eastern Asia",
          "timezones": [
              {
                  "zoneName": "Asia\/Seoul",
                  "gmtOffset": 32400,
                  "gmtOffsetName": "UTC+09:00",
                  "abbreviation": "KST",
                  "tzName": "Korea Standard Time"
              }
          ]
      },
      {
          "id": 206,
          "name": "South Sudan",
          "iso3": "SSD",
          "iso2": "SS",
          "numeric_code": "728",
          "phone_code": "211",
          "capital": "Juba",
          "currency": "SSP",
          "currency_symbol": "£",
          "tld": ".ss",
          "native": "South Sudan",
          "region": "Africa",
          "subregion": "Middle Africa",
          "timezones": [
              {
                  "zoneName": "Africa\/Juba",
                  "gmtOffset": 10800,
                  "gmtOffsetName": "UTC+03:00",
                  "abbreviation": "EAT",
                  "tzName": "East Africa Time"
              }
          ]
      },
      {
          "id": 207,
          "name": "Spain",
          "iso3": "ESP",
          "iso2": "ES",
          "numeric_code": "724",
          "phone_code": "34",
          "capital": "Madrid",
          "currency": "EUR",
          "currency_symbol": "€",
          "tld": ".es",
          "native": "España",
          "region": "Europe",
          "subregion": "Southern Europe",
          "timezones": [
              {
                  "zoneName": "Africa\/Ceuta",
                  "gmtOffset": 3600,
                  "gmtOffsetName": "UTC+01:00",
                  "abbreviation": "CET",
                  "tzName": "Central European Time"
              },
              {
                  "zoneName": "Atlantic\/Canary",
                  "gmtOffset": 0,
                  "gmtOffsetName": "UTC±00",
                  "abbreviation": "WET",
                  "tzName": "Western European Time"
              },
              {
                  "zoneName": "Europe\/Madrid",
                  "gmtOffset": 3600,
                  "gmtOffsetName": "UTC+01:00",
                  "abbreviation": "CET",
                  "tzName": "Central European Time"
              }
          ]
      },
      {
          "id": 208,
          "name": "Sri Lanka",
          "iso3": "LKA",
          "iso2": "LK",
          "numeric_code": "144",
          "phone_code": "94",
          "capital": "Colombo",
          "currency": "LKR",
          "currency_symbol": "Rs",
          "tld": ".lk",
          "native": "śrī laṃkāva",
          "region": "Asia",
          "subregion": "Southern Asia",
          "timezones": [
              {
                  "zoneName": "Asia\/Colombo",
                  "gmtOffset": 19800,
                  "gmtOffsetName": "UTC+05:30",
                  "abbreviation": "IST",
                  "tzName": "Indian Standard Time"
              }
          ]
      },
      {
          "id": 209,
          "name": "Sudan",
          "iso3": "SDN",
          "iso2": "SD",
          "numeric_code": "729",
          "phone_code": "249",
          "capital": "Khartoum",
          "currency": "SDG",
          "currency_symbol": ".س.ج",
          "tld": ".sd",
          "native": "السودان",
          "region": "Africa",
          "subregion": "Northern Africa",
          "timezones": [
              {
                  "zoneName": "Africa\/Khartoum",
                  "gmtOffset": 7200,
                  "gmtOffsetName": "UTC+02:00",
                  "abbreviation": "EAT",
                  "tzName": "Eastern African Time"
              }
          ]
      },
      {
          "id": 210,
          "name": "Suriname",
          "iso3": "SUR",
          "iso2": "SR",
          "numeric_code": "740",
          "phone_code": "597",
          "capital": "Paramaribo",
          "currency": "SRD",
          "currency_symbol": "$",
          "tld": ".sr",
          "native": "Suriname",
          "region": "Americas",
          "subregion": "South America",
          "timezones": [
              {
                  "zoneName": "America\/Paramaribo",
                  "gmtOffset": -10800,
                  "gmtOffsetName": "UTC-03:00",
                  "abbreviation": "SRT",
                  "tzName": "Suriname Time"
              }
          ]
      },
      {
          "id": 211,
          "name": "Svalbard And Jan Mayen Islands",
          "iso3": "SJM",
          "iso2": "SJ",
          "numeric_code": "744",
          "phone_code": "47",
          "capital": "Longyearbyen",
          "currency": "NOK",
          "currency_symbol": "kr",
          "tld": ".sj",
          "native": "Svalbard og Jan Mayen",
          "region": "Europe",
          "subregion": "Northern Europe",
          "timezones": [
              {
                  "zoneName": "Arctic\/Longyearbyen",
                  "gmtOffset": 3600,
                  "gmtOffsetName": "UTC+01:00",
                  "abbreviation": "CET",
                  "tzName": "Central European Time"
              }
          ]
      },
      {
          "id": 212,
          "name": "Swaziland",
          "iso3": "SWZ",
          "iso2": "SZ",
          "numeric_code": "748",
          "phone_code": "268",
          "capital": "Mbabane",
          "currency": "SZL",
          "currency_symbol": "E",
          "tld": ".sz",
          "native": "Swaziland",
          "region": "Africa",
          "subregion": "Southern Africa",
          "timezones": [
              {
                  "zoneName": "Africa\/Mbabane",
                  "gmtOffset": 7200,
                  "gmtOffsetName": "UTC+02:00",
                  "abbreviation": "SAST",
                  "tzName": "South African Standard Time"
              }
          ]
      },
      {
          "id": 213,
          "name": "Sweden",
          "iso3": "SWE",
          "iso2": "SE",
          "numeric_code": "752",
          "phone_code": "46",
          "capital": "Stockholm",
          "currency": "SEK",
          "currency_symbol": "kr",
          "tld": ".se",
          "native": "Sverige",
          "region": "Europe",
          "subregion": "Northern Europe",
          "timezones": [
              {
                  "zoneName": "Europe\/Stockholm",
                  "gmtOffset": 3600,
                  "gmtOffsetName": "UTC+01:00",
                  "abbreviation": "CET",
                  "tzName": "Central European Time"
              }
          ]
      },
      {
          "id": 214,
          "name": "Switzerland",
          "iso3": "CHE",
          "iso2": "CH",
          "numeric_code": "756",
          "phone_code": "41",
          "capital": "Bern",
          "currency": "CHF",
          "currency_symbol": "CHf",
          "tld": ".ch",
          "native": "Schweiz",
          "region": "Europe",
          "subregion": "Western Europe",
          "timezones": [
              {
                  "zoneName": "Europe\/Zurich",
                  "gmtOffset": 3600,
                  "gmtOffsetName": "UTC+01:00",
                  "abbreviation": "CET",
                  "tzName": "Central European Time"
              }
          ]
      },
      {
          "id": 215,
          "name": "Syria",
          "iso3": "SYR",
          "iso2": "SY",
          "numeric_code": "760",
          "phone_code": "963",
          "capital": "Damascus",
          "currency": "SYP",
          "currency_symbol": "LS",
          "tld": ".sy",
          "native": "سوريا",
          "region": "Asia",
          "subregion": "Western Asia",
          "timezones": [
              {
                  "zoneName": "Asia\/Damascus",
                  "gmtOffset": 7200,
                  "gmtOffsetName": "UTC+02:00",
                  "abbreviation": "EET",
                  "tzName": "Eastern European Time"
              }
          ]
      },
      {
          "id": 216,
          "name": "Taiwan",
          "iso3": "TWN",
          "iso2": "TW",
          "numeric_code": "158",
          "phone_code": "886",
          "capital": "Taipei",
          "currency": "TWD",
          "currency_symbol": "$",
          "tld": ".tw",
          "native": "臺灣",
          "region": "Asia",
          "subregion": "Eastern Asia",
          "timezones": [
              {
                  "zoneName": "Asia\/Taipei",
                  "gmtOffset": 28800,
                  "gmtOffsetName": "UTC+08:00",
                  "abbreviation": "CST",
                  "tzName": "China Standard Time"
              }
          ]
      },
      {
          "id": 217,
          "name": "Tajikistan",
          "iso3": "TJK",
          "iso2": "TJ",
          "numeric_code": "762",
          "phone_code": "992",
          "capital": "Dushanbe",
          "currency": "TJS",
          "currency_symbol": "SM",
          "tld": ".tj",
          "native": "Тоҷикистон",
          "region": "Asia",
          "subregion": "Central Asia",
          "timezones": [
              {
                  "zoneName": "Asia\/Dushanbe",
                  "gmtOffset": 18000,
                  "gmtOffsetName": "UTC+05:00",
                  "abbreviation": "TJT",
                  "tzName": "Tajikistan Time"
              }
          ]
      },
      {
          "id": 218,
          "name": "Tanzania",
          "iso3": "TZA",
          "iso2": "TZ",
          "numeric_code": "834",
          "phone_code": "255",
          "capital": "Dodoma",
          "currency": "TZS",
          "currency_symbol": "TSh",
          "tld": ".tz",
          "native": "Tanzania",
          "region": "Africa",
          "subregion": "Eastern Africa",
          "timezones": [
              {
                  "zoneName": "Africa\/Dar_es_Salaam",
                  "gmtOffset": 10800,
                  "gmtOffsetName": "UTC+03:00",
                  "abbreviation": "EAT",
                  "tzName": "East Africa Time"
              }
          ]
      },
      {
          "id": 219,
          "name": "Thailand",
          "iso3": "THA",
          "iso2": "TH",
          "numeric_code": "764",
          "phone_code": "66",
          "capital": "Bangkok",
          "currency": "THB",
          "currency_symbol": "฿",
          "tld": ".th",
          "native": "ประเทศไทย",
          "region": "Asia",
          "subregion": "South-Eastern Asia",
          "timezones": [
              {
                  "zoneName": "Asia\/Bangkok",
                  "gmtOffset": 25200,
                  "gmtOffsetName": "UTC+07:00",
                  "abbreviation": "ICT",
                  "tzName": "Indochina Time"
              }
          ]
      },
      {
          "id": 220,
          "name": "Togo",
          "iso3": "TGO",
          "iso2": "TG",
          "numeric_code": "768",
          "phone_code": "228",
          "capital": "Lome",
          "currency": "XOF",
          "currency_symbol": "CFA",
          "tld": ".tg",
          "native": "Togo",
          "region": "Africa",
          "subregion": "Western Africa",
          "timezones": [
              {
                  "zoneName": "Africa\/Lome",
                  "gmtOffset": 0,
                  "gmtOffsetName": "UTC±00",
                  "abbreviation": "GMT",
                  "tzName": "Greenwich Mean Time"
              }
          ]
      },
      {
          "id": 221,
          "name": "Tokelau",
          "iso3": "TKL",
          "iso2": "TK",
          "numeric_code": "772",
          "phone_code": "690",
          "capital": "",
          "currency": "NZD",
          "currency_symbol": "$",
          "tld": ".tk",
          "native": "Tokelau",
          "region": "Oceania",
          "subregion": "Polynesia",
          "timezones": [
              {
                  "zoneName": "Pacific\/Fakaofo",
                  "gmtOffset": 46800,
                  "gmtOffsetName": "UTC+13:00",
                  "abbreviation": "TKT",
                  "tzName": "Tokelau Time"
              }
          ]
      },
      {
          "id": 222,
          "name": "Tonga",
          "iso3": "TON",
          "iso2": "TO",
          "numeric_code": "776",
          "phone_code": "676",
          "capital": "Nuku'alofa",
          "currency": "TOP",
          "currency_symbol": "$",
          "tld": ".to",
          "native": "Tonga",
          "region": "Oceania",
          "subregion": "Polynesia",
          "timezones": [
              {
                  "zoneName": "Pacific\/Tongatapu",
                  "gmtOffset": 46800,
                  "gmtOffsetName": "UTC+13:00",
                  "abbreviation": "TOT",
                  "tzName": "Tonga Time"
              }
          ]
      },
      {
          "id": 223,
          "name": "Trinidad And Tobago",
          "iso3": "TTO",
          "iso2": "TT",
          "numeric_code": "780",
          "phone_code": "+1-868",
          "capital": "Port of Spain",
          "currency": "TTD",
          "currency_symbol": "$",
          "tld": ".tt",
          "native": "Trinidad and Tobago",
          "region": "Americas",
          "subregion": "Caribbean",
          "timezones": [
              {
                  "zoneName": "America\/Port_of_Spain",
                  "gmtOffset": -14400,
                  "gmtOffsetName": "UTC-04:00",
                  "abbreviation": "AST",
                  "tzName": "Atlantic Standard Time"
              }
          ]
      },
      {
          "id": 224,
          "name": "Tunisia",
          "iso3": "TUN",
          "iso2": "TN",
          "numeric_code": "788",
          "phone_code": "216",
          "capital": "Tunis",
          "currency": "TND",
          "currency_symbol": "ت.د",
          "tld": ".tn",
          "native": "تونس",
          "region": "Africa",
          "subregion": "Northern Africa",
          "timezones": [
              {
                  "zoneName": "Africa\/Tunis",
                  "gmtOffset": 3600,
                  "gmtOffsetName": "UTC+01:00",
                  "abbreviation": "CET",
                  "tzName": "Central European Time"
              }
          ]
      },
      {
          "id": 225,
          "name": "Turkey",
          "iso3": "TUR",
          "iso2": "TR",
          "numeric_code": "792",
          "phone_code": "90",
          "capital": "Ankara",
          "currency": "TRY",
          "currency_symbol": "₺",
          "tld": ".tr",
          "native": "Türkiye",
          "region": "Asia",
          "subregion": "Western Asia",
          "timezones": [
              {
                  "zoneName": "Europe\/Istanbul",
                  "gmtOffset": 10800,
                  "gmtOffsetName": "UTC+03:00",
                  "abbreviation": "EET",
                  "tzName": "Eastern European Time"
              }
          ]
      },
      {
          "id": 226,
          "name": "Turkmenistan",
          "iso3": "TKM",
          "iso2": "TM",
          "numeric_code": "795",
          "phone_code": "993",
          "capital": "Ashgabat",
          "currency": "TMT",
          "currency_symbol": "T",
          "tld": ".tm",
          "native": "Türkmenistan",
          "region": "Asia",
          "subregion": "Central Asia",
          "timezones": [
              {
                  "zoneName": "Asia\/Ashgabat",
                  "gmtOffset": 18000,
                  "gmtOffsetName": "UTC+05:00",
                  "abbreviation": "TMT",
                  "tzName": "Turkmenistan Time"
              }
          ]
      },
      {
          "id": 227,
          "name": "Turks And Caicos Islands",
          "iso3": "TCA",
          "iso2": "TC",
          "numeric_code": "796",
          "phone_code": "+1-649",
          "capital": "Cockburn Town",
          "currency": "USD",
          "currency_symbol": "$",
          "tld": ".tc",
          "native": "Turks and Caicos Islands",
          "region": "Americas",
          "subregion": "Caribbean",
          "timezones": [
              {
                  "zoneName": "America\/Grand_Turk",
                  "gmtOffset": -18000,
                  "gmtOffsetName": "UTC-05:00",
                  "abbreviation": "EST",
                  "tzName": "Eastern Standard Time (North America"
              }
          ]
      },
      {
          "id": 228,
          "name": "Tuvalu",
          "iso3": "TUV",
          "iso2": "TV",
          "numeric_code": "798",
          "phone_code": "688",
          "capital": "Funafuti",
          "currency": "AUD",
          "currency_symbol": "$",
          "tld": ".tv",
          "native": "Tuvalu",
          "region": "Oceania",
          "subregion": "Polynesia",
          "timezones": [
              {
                  "zoneName": "Pacific\/Funafuti",
                  "gmtOffset": 43200,
                  "gmtOffsetName": "UTC+12:00",
                  "abbreviation": "TVT",
                  "tzName": "Tuvalu Time"
              }
          ]
      },
      {
          "id": 229,
          "name": "Uganda",
          "iso3": "UGA",
          "iso2": "UG",
          "numeric_code": "800",
          "phone_code": "256",
          "capital": "Kampala",
          "currency": "UGX",
          "currency_symbol": "USh",
          "tld": ".ug",
          "native": "Uganda",
          "region": "Africa",
          "subregion": "Eastern Africa",
          "timezones": [
              {
                  "zoneName": "Africa\/Kampala",
                  "gmtOffset": 10800,
                  "gmtOffsetName": "UTC+03:00",
                  "abbreviation": "EAT",
                  "tzName": "East Africa Time"
              }
          ]
      },
      {
          "id": 230,
          "name": "Ukraine",
          "iso3": "UKR",
          "iso2": "UA",
          "numeric_code": "804",
          "phone_code": "380",
          "capital": "Kiev",
          "currency": "UAH",
          "currency_symbol": "₴",
          "tld": ".ua",
          "native": "Україна",
          "region": "Europe",
          "subregion": "Eastern Europe",
          "timezones": [
              {
                  "zoneName": "Europe\/Kiev",
                  "gmtOffset": 7200,
                  "gmtOffsetName": "UTC+02:00",
                  "abbreviation": "EET",
                  "tzName": "Eastern European Time"
              },
              {
                  "zoneName": "Europe\/Simferopol",
                  "gmtOffset": 10800,
                  "gmtOffsetName": "UTC+03:00",
                  "abbreviation": "MSK",
                  "tzName": "Moscow Time"
              },
              {
                  "zoneName": "Europe\/Uzhgorod",
                  "gmtOffset": 7200,
                  "gmtOffsetName": "UTC+02:00",
                  "abbreviation": "EET",
                  "tzName": "Eastern European Time"
              },
              {
                  "zoneName": "Europe\/Zaporozhye",
                  "gmtOffset": 7200,
                  "gmtOffsetName": "UTC+02:00",
                  "abbreviation": "EET",
                  "tzName": "Eastern European Time"
              }
          ]
      },
      {
          "id": 231,
          "name": "United Arab Emirates",
          "iso3": "ARE",
          "iso2": "AE",
          "numeric_code": "784",
          "phone_code": "971",
          "capital": "Abu Dhabi",
          "currency": "AED",
          "currency_symbol": "إ.د",
          "tld": ".ae",
          "native": "دولة الإمارات العربية المتحدة",
          "region": "Asia",
          "subregion": "Western Asia",
          "timezones": [
              {
                  "zoneName": "Asia\/Dubai",
                  "gmtOffset": 14400,
                  "gmtOffsetName": "UTC+04:00",
                  "abbreviation": "GST",
                  "tzName": "Gulf Standard Time"
              }
          ]
      },
      {
          "id": 232,
          "name": "United Kingdom",
          "iso3": "GBR",
          "iso2": "GB",
          "numeric_code": "826",
          "phone_code": "44",
          "capital": "London",
          "currency": "GBP",
          "currency_symbol": "£",
          "tld": ".uk",
          "native": "United Kingdom",
          "region": "Europe",
          "subregion": "Northern Europe",
          "timezones": [
              {
                  "zoneName": "Europe\/London",
                  "gmtOffset": 0,
                  "gmtOffsetName": "UTC±00",
                  "abbreviation": "GMT",
                  "tzName": "Greenwich Mean Time"
              }
          ]
      },
      {
          "id": 233,
          "name": "United States",
          "iso3": "USA",
          "iso2": "US",
          "numeric_code": "840",
          "phone_code": "1",
          "capital": "Washington",
          "currency": "USD",
          "currency_symbol": "$",
          "tld": ".us",
          "native": "United States",
          "region": "Americas",
          "subregion": "Northern America",
          "timezones": [
              {
                  "zoneName": "America\/Adak",
                  "gmtOffset": -36000,
                  "gmtOffsetName": "UTC-10:00",
                  "abbreviation": "HST",
                  "tzName": "Hawaii–Aleutian Standard Time"
              },
              {
                  "zoneName": "America\/Anchorage",
                  "gmtOffset": -32400,
                  "gmtOffsetName": "UTC-09:00",
                  "abbreviation": "AKST",
                  "tzName": "Alaska Standard Time"
              },
              {
                  "zoneName": "America\/Boise",
                  "gmtOffset": -25200,
                  "gmtOffsetName": "UTC-07:00",
                  "abbreviation": "MST",
                  "tzName": "Mountain Standard Time (North America"
              },
              {
                  "zoneName": "America\/Chicago",
                  "gmtOffset": -21600,
                  "gmtOffsetName": "UTC-06:00",
                  "abbreviation": "CST",
                  "tzName": "Central Standard Time (North America"
              },
              {
                  "zoneName": "America\/Denver",
                  "gmtOffset": -25200,
                  "gmtOffsetName": "UTC-07:00",
                  "abbreviation": "MST",
                  "tzName": "Mountain Standard Time (North America"
              },
              {
                  "zoneName": "America\/Detroit",
                  "gmtOffset": -18000,
                  "gmtOffsetName": "UTC-05:00",
                  "abbreviation": "EST",
                  "tzName": "Eastern Standard Time (North America"
              },
              {
                  "zoneName": "America\/Indiana\/Indianapolis",
                  "gmtOffset": -18000,
                  "gmtOffsetName": "UTC-05:00",
                  "abbreviation": "EST",
                  "tzName": "Eastern Standard Time (North America"
              },
              {
                  "zoneName": "America\/Indiana\/Knox",
                  "gmtOffset": -21600,
                  "gmtOffsetName": "UTC-06:00",
                  "abbreviation": "CST",
                  "tzName": "Central Standard Time (North America"
              },
              {
                  "zoneName": "America\/Indiana\/Marengo",
                  "gmtOffset": -18000,
                  "gmtOffsetName": "UTC-05:00",
                  "abbreviation": "EST",
                  "tzName": "Eastern Standard Time (North America"
              },
              {
                  "zoneName": "America\/Indiana\/Petersburg",
                  "gmtOffset": -18000,
                  "gmtOffsetName": "UTC-05:00",
                  "abbreviation": "EST",
                  "tzName": "Eastern Standard Time (North America"
              },
              {
                  "zoneName": "America\/Indiana\/Tell_City",
                  "gmtOffset": -21600,
                  "gmtOffsetName": "UTC-06:00",
                  "abbreviation": "CST",
                  "tzName": "Central Standard Time (North America"
              },
              {
                  "zoneName": "America\/Indiana\/Vevay",
                  "gmtOffset": -18000,
                  "gmtOffsetName": "UTC-05:00",
                  "abbreviation": "EST",
                  "tzName": "Eastern Standard Time (North America"
              },
              {
                  "zoneName": "America\/Indiana\/Vincennes",
                  "gmtOffset": -18000,
                  "gmtOffsetName": "UTC-05:00",
                  "abbreviation": "EST",
                  "tzName": "Eastern Standard Time (North America"
              },
              {
                  "zoneName": "America\/Indiana\/Winamac",
                  "gmtOffset": -18000,
                  "gmtOffsetName": "UTC-05:00",
                  "abbreviation": "EST",
                  "tzName": "Eastern Standard Time (North America"
              },
              {
                  "zoneName": "America\/Juneau",
                  "gmtOffset": -32400,
                  "gmtOffsetName": "UTC-09:00",
                  "abbreviation": "AKST",
                  "tzName": "Alaska Standard Time"
              },
              {
                  "zoneName": "America\/Kentucky\/Louisville",
                  "gmtOffset": -18000,
                  "gmtOffsetName": "UTC-05:00",
                  "abbreviation": "EST",
                  "tzName": "Eastern Standard Time (North America"
              },
              {
                  "zoneName": "America\/Kentucky\/Monticello",
                  "gmtOffset": -18000,
                  "gmtOffsetName": "UTC-05:00",
                  "abbreviation": "EST",
                  "tzName": "Eastern Standard Time (North America"
              },
              {
                  "zoneName": "America\/Los_Angeles",
                  "gmtOffset": -28800,
                  "gmtOffsetName": "UTC-08:00",
                  "abbreviation": "PST",
                  "tzName": "Pacific Standard Time (North America"
              },
              {
                  "zoneName": "America\/Menominee",
                  "gmtOffset": -21600,
                  "gmtOffsetName": "UTC-06:00",
                  "abbreviation": "CST",
                  "tzName": "Central Standard Time (North America"
              },
              {
                  "zoneName": "America\/Metlakatla",
                  "gmtOffset": -32400,
                  "gmtOffsetName": "UTC-09:00",
                  "abbreviation": "AKST",
                  "tzName": "Alaska Standard Time"
              },
              {
                  "zoneName": "America\/New_York",
                  "gmtOffset": -18000,
                  "gmtOffsetName": "UTC-05:00",
                  "abbreviation": "EST",
                  "tzName": "Eastern Standard Time (North America"
              },
              {
                  "zoneName": "America\/Nome",
                  "gmtOffset": -32400,
                  "gmtOffsetName": "UTC-09:00",
                  "abbreviation": "AKST",
                  "tzName": "Alaska Standard Time"
              },
              {
                  "zoneName": "America\/North_Dakota\/Beulah",
                  "gmtOffset": -21600,
                  "gmtOffsetName": "UTC-06:00",
                  "abbreviation": "CST",
                  "tzName": "Central Standard Time (North America"
              },
              {
                  "zoneName": "America\/North_Dakota\/Center",
                  "gmtOffset": -21600,
                  "gmtOffsetName": "UTC-06:00",
                  "abbreviation": "CST",
                  "tzName": "Central Standard Time (North America"
              },
              {
                  "zoneName": "America\/North_Dakota\/New_Salem",
                  "gmtOffset": -21600,
                  "gmtOffsetName": "UTC-06:00",
                  "abbreviation": "CST",
                  "tzName": "Central Standard Time (North America"
              },
              {
                  "zoneName": "America\/Phoenix",
                  "gmtOffset": -25200,
                  "gmtOffsetName": "UTC-07:00",
                  "abbreviation": "MST",
                  "tzName": "Mountain Standard Time (North America"
              },
              {
                  "zoneName": "America\/Sitka",
                  "gmtOffset": -32400,
                  "gmtOffsetName": "UTC-09:00",
                  "abbreviation": "AKST",
                  "tzName": "Alaska Standard Time"
              },
              {
                  "zoneName": "America\/Yakutat",
                  "gmtOffset": -32400,
                  "gmtOffsetName": "UTC-09:00",
                  "abbreviation": "AKST",
                  "tzName": "Alaska Standard Time"
              },
              {
                  "zoneName": "Pacific\/Honolulu",
                  "gmtOffset": -36000,
                  "gmtOffsetName": "UTC-10:00",
                  "abbreviation": "HST",
                  "tzName": "Hawaii–Aleutian Standard Time"
              }
          ]
      },
      {
          "id": 234,
          "name": "United States Minor Outlying Islands",
          "iso3": "UMI",
          "iso2": "UM",
          "numeric_code": "581",
          "phone_code": "1",
          "capital": "",
          "currency": "USD",
          "currency_symbol": "$",
          "tld": ".us",
          "native": "United States Minor Outlying Islands",
          "region": "Americas",
          "subregion": "Northern America",
          "timezones": [
              {
                  "zoneName": "Pacific\/Midway",
                  "gmtOffset": -39600,
                  "gmtOffsetName": "UTC-11:00",
                  "abbreviation": "SST",
                  "tzName": "Samoa Standard Time"
              },
              {
                  "zoneName": "Pacific\/Wake",
                  "gmtOffset": 43200,
                  "gmtOffsetName": "UTC+12:00",
                  "abbreviation": "WAKT",
                  "tzName": "Wake Island Time"
              }
          ]
      },
      {
          "id": 235,
          "name": "Uruguay",
          "iso3": "URY",
          "iso2": "UY",
          "numeric_code": "858",
          "phone_code": "598",
          "capital": "Montevideo",
          "currency": "UYU",
          "currency_symbol": "$",
          "tld": ".uy",
          "native": "Uruguay",
          "region": "Americas",
          "subregion": "South America",
          "timezones": [
              {
                  "zoneName": "America\/Montevideo",
                  "gmtOffset": -10800,
                  "gmtOffsetName": "UTC-03:00",
                  "abbreviation": "UYT",
                  "tzName": "Uruguay Standard Time"
              }
          ]
      },
      {
          "id": 236,
          "name": "Uzbekistan",
          "iso3": "UZB",
          "iso2": "UZ",
          "numeric_code": "860",
          "phone_code": "998",
          "capital": "Tashkent",
          "currency": "UZS",
          "currency_symbol": "лв",
          "tld": ".uz",
          "native": "O‘zbekiston",
          "region": "Asia",
          "subregion": "Central Asia",
          "timezones": [
              {
                  "zoneName": "Asia\/Samarkand",
                  "gmtOffset": 18000,
                  "gmtOffsetName": "UTC+05:00",
                  "abbreviation": "UZT",
                  "tzName": "Uzbekistan Time"
              },
              {
                  "zoneName": "Asia\/Tashkent",
                  "gmtOffset": 18000,
                  "gmtOffsetName": "UTC+05:00",
                  "abbreviation": "UZT",
                  "tzName": "Uzbekistan Time"
              }
          ]
      },
      {
          "id": 237,
          "name": "Vanuatu",
          "iso3": "VUT",
          "iso2": "VU",
          "numeric_code": "548",
          "phone_code": "678",
          "capital": "Port Vila",
          "currency": "VUV",
          "currency_symbol": "VT",
          "tld": ".vu",
          "native": "Vanuatu",
          "region": "Oceania",
          "subregion": "Melanesia",
          "timezones": [
              {
                  "zoneName": "Pacific\/Efate",
                  "gmtOffset": 39600,
                  "gmtOffsetName": "UTC+11:00",
                  "abbreviation": "VUT",
                  "tzName": "Vanuatu Time"
              }
          ]
      },
      {
          "id": 238,
          "name": "Vatican City State (Holy See)",
          "iso3": "VAT",
          "iso2": "VA",
          "numeric_code": "336",
          "phone_code": "379",
          "capital": "Vatican City",
          "currency": "EUR",
          "currency_symbol": "€",
          "tld": ".va",
          "native": "Vaticano",
          "region": "Europe",
          "subregion": "Southern Europe",
          "timezones": [
              {
                  "zoneName": "Europe\/Vatican",
                  "gmtOffset": 3600,
                  "gmtOffsetName": "UTC+01:00",
                  "abbreviation": "CET",
                  "tzName": "Central European Time"
              }
          ]
      },
      {
          "id": 239,
          "name": "Venezuela",
          "iso3": "VEN",
          "iso2": "VE",
          "numeric_code": "862",
          "phone_code": "58",
          "capital": "Caracas",
          "currency": "VEF",
          "currency_symbol": "Bs",
          "tld": ".ve",
          "native": "Venezuela",
          "region": "Americas",
          "subregion": "South America",
          "timezones": [
              {
                  "zoneName": "America\/Caracas",
                  "gmtOffset": -14400,
                  "gmtOffsetName": "UTC-04:00",
                  "abbreviation": "VET",
                  "tzName": "Venezuelan Standard Time"
              }
          ]
      },
      {
          "id": 240,
          "name": "Vietnam",
          "iso3": "VNM",
          "iso2": "VN",
          "numeric_code": "704",
          "phone_code": "84",
          "capital": "Hanoi",
          "currency": "VND",
          "currency_symbol": "₫",
          "tld": ".vn",
          "native": "Việt Nam",
          "region": "Asia",
          "subregion": "South-Eastern Asia",
          "timezones": [
              {
                  "zoneName": "Asia\/Ho_Chi_Minh",
                  "gmtOffset": 25200,
                  "gmtOffsetName": "UTC+07:00",
                  "abbreviation": "ICT",
                  "tzName": "Indochina Time"
              }
          ]
      },
      {
          "id": 241,
          "name": "Virgin Islands (British)",
          "iso3": "VGB",
          "iso2": "VG",
          "numeric_code": "092",
          "phone_code": "+1-284",
          "capital": "Road Town",
          "currency": "USD",
          "currency_symbol": "$",
          "tld": ".vg",
          "native": "British Virgin Islands",
          "region": "Americas",
          "subregion": "Caribbean",
          "timezones": [
              {
                  "zoneName": "America\/Tortola",
                  "gmtOffset": -14400,
                  "gmtOffsetName": "UTC-04:00",
                  "abbreviation": "AST",
                  "tzName": "Atlantic Standard Time"
              }
          ]
      },
      {
          "id": 242,
          "name": "Virgin Islands (US)",
          "iso3": "VIR",
          "iso2": "VI",
          "numeric_code": "850",
          "phone_code": "+1-340",
          "capital": "Charlotte Amalie",
          "currency": "USD",
          "currency_symbol": "$",
          "tld": ".vi",
          "native": "United States Virgin Islands",
          "region": "Americas",
          "subregion": "Caribbean",
          "timezones": [
              {
                  "zoneName": "America\/St_Thomas",
                  "gmtOffset": -14400,
                  "gmtOffsetName": "UTC-04:00",
                  "abbreviation": "AST",
                  "tzName": "Atlantic Standard Time"
              }
          ]
      },
      {
          "id": 243,
          "name": "Wallis And Futuna Islands",
          "iso3": "WLF",
          "iso2": "WF",
          "numeric_code": "876",
          "phone_code": "681",
          "capital": "Mata Utu",
          "currency": "XPF",
          "currency_symbol": "₣",
          "tld": ".wf",
          "native": "Wallis et Futuna",
          "region": "Oceania",
          "subregion": "Polynesia",
          "timezones": [
              {
                  "zoneName": "Pacific\/Wallis",
                  "gmtOffset": 43200,
                  "gmtOffsetName": "UTC+12:00",
                  "abbreviation": "WFT",
                  "tzName": "Wallis & Futuna Time"
              }
          ]
      },
      {
          "id": 244,
          "name": "Western Sahara",
          "iso3": "ESH",
          "iso2": "EH",
          "numeric_code": "732",
          "phone_code": "212",
          "capital": "El-Aaiun",
          "currency": "MAD",
          "currency_symbol": "MAD",
          "tld": ".eh",
          "native": "الصحراء الغربية",
          "region": "Africa",
          "subregion": "Northern Africa",
          "timezones": [
              {
                  "zoneName": "Africa\/El_Aaiun",
                  "gmtOffset": 3600,
                  "gmtOffsetName": "UTC+01:00",
                  "abbreviation": "WEST",
                  "tzName": "Western European Summer Time"
              }
          ]
      },
      {
          "id": 245,
          "name": "Yemen",
          "iso3": "YEM",
          "iso2": "YE",
          "numeric_code": "887",
          "phone_code": "967",
          "capital": "Sanaa",
          "currency": "YER",
          "currency_symbol": "﷼",
          "tld": ".ye",
          "native": "اليَمَن",
          "region": "Asia",
          "subregion": "Western Asia",
          "timezones": [
              {
                  "zoneName": "Asia\/Aden",
                  "gmtOffset": 10800,
                  "gmtOffsetName": "UTC+03:00",
                  "abbreviation": "AST",
                  "tzName": "Arabia Standard Time"
              }
          ]
      },
      {
          "id": 246,
          "name": "Zambia",
          "iso3": "ZMB",
          "iso2": "ZM",
          "numeric_code": "894",
          "phone_code": "260",
          "capital": "Lusaka",
          "currency": "ZMW",
          "currency_symbol": "ZK",
          "tld": ".zm",
          "native": "Zambia",
          "region": "Africa",
          "subregion": "Eastern Africa",
          "timezones": [
              {
                  "zoneName": "Africa\/Lusaka",
                  "gmtOffset": 7200,
                  "gmtOffsetName": "UTC+02:00",
                  "abbreviation": "CAT",
                  "tzName": "Central Africa Time"
              }
          ]
      },
      {
          "id": 247,
          "name": "Zimbabwe",
          "iso3": "ZWE",
          "iso2": "ZW",
          "numeric_code": "716",
          "phone_code": "263",
          "capital": "Harare",
          "currency": "ZWL",
          "currency_symbol": "$",
          "tld": ".zw",
          "native": "Zimbabwe",
          "region": "Africa",
          "subregion": "Eastern Africa",
          "timezones": [
              {
                  "zoneName": "Africa\/Harare",
                  "gmtOffset": 7200,
                  "gmtOffsetName": "UTC+02:00",
                  "abbreviation": "CAT",
                  "tzName": "Central Africa Time"
              }
          ]
      }
  ]

   for(let i = 0; i < obj.length; i++){
      
   //  console.log("i " + i + " timezone " + JSON.stringify(obj[i].timezones))
    await queryInterface.bulkInsert('Customers', [{
        "name": obj[i].name,
        "iso3": obj[i].iso3,
        "iso2": obj[i].iso2,
        "numericCode": obj[i].numericCode,
        "phoneCode": obj[i].phoneCode,
        "capital": obj[i].capital,
        "currency": obj[i].currency,
        "currencySymbol": obj[i].currencySymbol,
        "tld": obj[i].tld,
        "native": obj[i].native,
        "region": obj[i].region,
        "subregion": obj[i].subregion,
        "timezones":  JSON.stringify({
            "tz": obj[i].timezones
        }),
        createdAt: new Date(),
        updatedAt: new Date()
    }], {})
  }
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
