/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const posts = [
    {
      gender: "male",
      name: {
        title: "Mr",
        first: "Hunter",
        last: "Kelly"
      },
      location: {
        street: {
          number: 493,
          name: "Killarney Road"
        },
        city: "Oranmore",
        state: "South Dublin",
        country: "Ireland",
        postcode: 83770,
        coordinates: {
          latitude: "4.1665",
          longitude: "-161.3205"
        },
        timezone: {
          offset: "+6:00",
          description: "Almaty, Dhaka, Colombo"
        }
      },
      email: "hunter.kelly@example.com",
      login: {
        uuid: "67c05bcd-6dae-492a-8b05-f3b0a37c1ef3",
        username: "angryfrog968",
        password: "prayers",
        salt: "y1N6LiPW",
        md5: "14ab20fb93e70ef76d1c44f4981ea56a",
        sha1: "ab509b2c5b5c729027ff3c9265ad19016ac19408",
        sha256:
          "0f87c0167764a126a7e1a5bb1ffc73c50862fb7c0de42107caf4cb640a25fdbf"
      },
      dob: {
        date: "1956-06-18T13:59:59.743Z",
        age: 68
      },
      registered: {
        date: "2016-03-09T22:26:36.684Z",
        age: 8
      },
      phone: "051-247-1992",
      cell: "081-475-3200",
      id: {
        name: "PPS",
        value: "1192011T"
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/3.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/3.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/3.jpg"
      },
      nat: "IE"
    },
    {
      gender: "male",
      name: {
        title: "Mr",
        first: "Mehmet",
        last: "Özbir"
      },
      location: {
        street: {
          number: 6067,
          name: "Doktorlar Cd"
        },
        city: "Giresun",
        state: "Batman",
        country: "Turkey",
        postcode: 80343,
        coordinates: {
          latitude: "-0.6211",
          longitude: "79.9979"
        },
        timezone: {
          offset: "+10:00",
          description: "Eastern Australia, Guam, Vladivostok"
        }
      },
      email: "mehmet.ozbir@example.com",
      login: {
        uuid: "8530121e-3021-4e1a-bf92-5ec6e265f43e",
        username: "goldenpanda140",
        password: "tacoma",
        salt: "z3hAt8pn",
        md5: "e36e637a4fe29e2b202cde25e710790a",
        sha1: "75325efdccf985f2f09e8de22cd2b23ef283803e",
        sha256:
          "ed0da83c153a4a0cd2f7e2fef73ed381c8f651e0efaa2f8aca770b2e7a0ded68"
      },
      dob: {
        date: "1984-05-16T23:35:40.947Z",
        age: 40
      },
      registered: {
        date: "2019-03-09T22:38:02.186Z",
        age: 5
      },
      phone: "(297)-677-3074",
      cell: "(438)-038-9707",
      id: {
        name: "",
        value: null
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/7.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/7.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/7.jpg"
      },
      nat: "TR"
    },
    {
      gender: "female",
      name: {
        title: "Ms",
        first: "Sushmitha",
        last: "Rai"
      },
      location: {
        street: {
          number: 6508,
          name: "Colaba Causeway"
        },
        city: "Navi Mumbai",
        state: "Daman and Diu",
        country: "India",
        postcode: 32162,
        coordinates: {
          latitude: "-34.7350",
          longitude: "74.9882"
        },
        timezone: {
          offset: "-10:00",
          description: "Hawaii"
        }
      },
      email: "sushmitha.rai@example.com",
      login: {
        uuid: "0bd13fca-bc50-4b77-9e05-efc1b8bebd1a",
        username: "greenrabbit341",
        password: "speed",
        salt: "TbtCa4E9",
        md5: "e62cac7fc882bdf85847b9bac7ed022f",
        sha1: "e23e9cfda10d60f53a8ca9936218b2e7c8b46425",
        sha256:
          "08c1090fbb878dd538583ed1604d32444a280446d9383a0bee7d60022d1ac103"
      },
      dob: {
        date: "1970-01-27T22:10:09.493Z",
        age: 54
      },
      registered: {
        date: "2015-12-27T13:19:27.910Z",
        age: 8
      },
      phone: "9481466098",
      cell: "9545340964",
      id: {
        name: "UIDAI",
        value: "988128583972"
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/12.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/12.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/12.jpg"
      },
      nat: "IN"
    },
    {
      gender: "male",
      name: {
        title: "Mr",
        first: "Loreto",
        last: "das Neves"
      },
      location: {
        street: {
          number: 9963,
          name: "Avenida Brasil "
        },
        city: "Itaguaí",
        state: "Mato Grosso do Sul",
        country: "Brazil",
        postcode: 40396,
        coordinates: {
          latitude: "-51.4017",
          longitude: "61.5339"
        },
        timezone: {
          offset: "-9:00",
          description: "Alaska"
        }
      },
      email: "loreto.dasneves@example.com",
      login: {
        uuid: "33b0470e-7fd5-4c47-a2c6-d27991edb979",
        username: "sadcat231",
        password: "chevrole",
        salt: "huUrotB1",
        md5: "98d7411f80a91810becb866e550e65cd",
        sha1: "99fbfa56c089e0152c9cebf3fa9e3a0b52a205eb",
        sha256:
          "80ca8a649963709ea0b0bf0cbe4a751e81faab04c791930a46406a426d068c0e"
      },
      dob: {
        date: "1955-11-22T04:44:32.694Z",
        age: 68
      },
      registered: {
        date: "2013-11-09T23:18:19.657Z",
        age: 10
      },
      phone: "(25) 6170-7309",
      cell: "(72) 1040-1547",
      id: {
        name: "CPF",
        value: "820.432.672-39"
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/0.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/0.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/0.jpg"
      },
      nat: "BR"
    },
    {
      gender: "male",
      name: {
        title: "Mr",
        first: "Samuel",
        last: "Lam"
      },
      location: {
        street: {
          number: 8148,
          name: "Stanley Way"
        },
        city: "Enterprise",
        state: "Manitoba",
        country: "Canada",
        postcode: "T3N 4M8",
        coordinates: {
          latitude: "-23.4479",
          longitude: "-34.3474"
        },
        timezone: {
          offset: "-2:00",
          description: "Mid-Atlantic"
        }
      },
      email: "samuel.lam@example.com",
      login: {
        uuid: "1fa6eed2-3d9e-45ec-b109-52f066525c43",
        username: "sadgorilla731",
        password: "logan",
        salt: "qcyAjE2X",
        md5: "f15921581389379e61a80a952b662f2b",
        sha1: "c0978edd7803b62b959a45a880f2ee89339de660",
        sha256:
          "252872a8a8c512a10bcc60e6f15e5a42b13b5cfafca1dfd092eb246842c8d401"
      },
      dob: {
        date: "1988-10-19T12:48:17.545Z",
        age: 35
      },
      registered: {
        date: "2018-07-30T13:59:35.444Z",
        age: 6
      },
      phone: "U47 L40-6237",
      cell: "U10 S19-9034",
      id: {
        name: "SIN",
        value: "029774973"
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/62.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/62.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/62.jpg"
      },
      nat: "CA"
    },
    {
      gender: "male",
      name: {
        title: "Mr",
        first: "Elias",
        last: "Nielsen"
      },
      location: {
        street: {
          number: 5737,
          name: "Søvang"
        },
        city: "Hornbæk",
        state: "Midtjylland",
        country: "Denmark",
        postcode: 98055,
        coordinates: {
          latitude: "-33.7850",
          longitude: "-18.5198"
        },
        timezone: {
          offset: "-12:00",
          description: "Eniwetok, Kwajalein"
        }
      },
      email: "elias.nielsen@example.com",
      login: {
        uuid: "d3b22390-49a2-4c1b-81fb-42170386cd30",
        username: "bluefish768",
        password: "broncos1",
        salt: "KAF031Hz",
        md5: "9475ed9354ffcc84473b6dbf99c3c892",
        sha1: "46a2611a51b9eda0e7176593198e22a681f74b2d",
        sha256:
          "eecfefd48f8591bf0df7e9b1837428817ad730ad74507002f25084ad87830bee"
      },
      dob: {
        date: "1999-06-18T14:08:03.038Z",
        age: 25
      },
      registered: {
        date: "2013-11-12T05:47:04.763Z",
        age: 10
      },
      phone: "20002217",
      cell: "65179055",
      id: {
        name: "CPR",
        value: "180699-8341"
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/76.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/76.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/76.jpg"
      },
      nat: "DK"
    },
    {
      gender: "male",
      name: {
        title: "Mr",
        first: "Alfred",
        last: "Miller"
      },
      location: {
        street: {
          number: 5620,
          name: "Jones Road"
        },
        city: "Blessington",
        state: "Galway City",
        country: "Ireland",
        postcode: 45933,
        coordinates: {
          latitude: "-14.3065",
          longitude: "-42.1351"
        },
        timezone: {
          offset: "-12:00",
          description: "Eniwetok, Kwajalein"
        }
      },
      email: "alfred.miller@example.com",
      login: {
        uuid: "4ab35f14-d76d-4e42-b406-627dc8b6bcca",
        username: "yellowpanda700",
        password: "sambo",
        salt: "Ryihb0aG",
        md5: "86160b14b0820c275f8ca0c679805473",
        sha1: "84bf194f889c6d68d29c8073139bbfbcc92f9614",
        sha256:
          "b92c12528f7e74a273ef72c6833083910f60fb03c100a9f43417a142b29fd2f4"
      },
      dob: {
        date: "1955-04-26T16:12:02.705Z",
        age: 69
      },
      registered: {
        date: "2013-11-18T11:09:04.135Z",
        age: 10
      },
      phone: "031-862-2926",
      cell: "081-863-8995",
      id: {
        name: "PPS",
        value: "3559897T"
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/34.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/34.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/34.jpg"
      },
      nat: "IE"
    },
    {
      gender: "male",
      name: {
        title: "Mr",
        first: "Darrell",
        last: "Wood"
      },
      location: {
        street: {
          number: 6584,
          name: "Miller Ave"
        },
        city: "Nowra",
        state: "Western Australia",
        country: "Australia",
        postcode: 3623,
        coordinates: {
          latitude: "55.0691",
          longitude: "-15.6636"
        },
        timezone: {
          offset: "+1:00",
          description: "Brussels, Copenhagen, Madrid, Paris"
        }
      },
      email: "darrell.wood@example.com",
      login: {
        uuid: "c661935b-c31b-43ff-857f-762f0123b8ce",
        username: "happymeercat889",
        password: "mankind",
        salt: "sdHiiXrv",
        md5: "bc752c589a76d77e90a00453799432cb",
        sha1: "dab239ff3c7a0639cb18e04daa2c56f5a74f7fae",
        sha256:
          "e40b8f6dd4f6ba284cb117ba3e3fa56b3f07391c0acf68b9868d73157c3afc03"
      },
      dob: {
        date: "1945-08-12T23:29:22.199Z",
        age: 78
      },
      registered: {
        date: "2018-09-16T05:57:07.497Z",
        age: 5
      },
      phone: "08-8428-8276",
      cell: "0472-059-778",
      id: {
        name: "TFN",
        value: "783227772"
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/7.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/7.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/7.jpg"
      },
      nat: "AU"
    },
    {
      gender: "female",
      name: {
        title: "Miss",
        first: "Urte",
        last: "Nysted"
      },
      location: {
        street: {
          number: 5731,
          name: "Marsveien"
        },
        city: "Oltedal",
        state: "Hordaland",
        country: "Norway",
        postcode: "6096",
        coordinates: {
          latitude: "63.1872",
          longitude: "93.4810"
        },
        timezone: {
          offset: "-3:30",
          description: "Newfoundland"
        }
      },
      email: "urte.nysted@example.com",
      login: {
        uuid: "75ecbbfe-373f-4a06-9cd6-819bb287d3d1",
        username: "heavyladybug605",
        password: "bremen",
        salt: "hlZJ0lAB",
        md5: "ff8e7ef10ee83384d501026202325c29",
        sha1: "9e63054d4bfd90fbc94b8e32aa4eec26c94c558b",
        sha256:
          "8134209a21e2009d332b91c1083f81152d6064b4b3d7929923bda8c7fbe4bc96"
      },
      dob: {
        date: "1997-05-14T03:56:36.245Z",
        age: 27
      },
      registered: {
        date: "2019-09-24T00:04:36.682Z",
        age: 4
      },
      phone: "82388300",
      cell: "46217055",
      id: {
        name: "FN",
        value: "14059748042"
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/29.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/29.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/29.jpg"
      },
      nat: "NO"
    },
    {
      gender: "female",
      name: {
        title: "Miss",
        first: "Tracy",
        last: "Davidson"
      },
      location: {
        street: {
          number: 2368,
          name: "Depaul Dr"
        },
        city: "Wollongong",
        state: "New South Wales",
        country: "Australia",
        postcode: 4006,
        coordinates: {
          latitude: "-47.7958",
          longitude: "178.0656"
        },
        timezone: {
          offset: "+8:00",
          description: "Beijing, Perth, Singapore, Hong Kong"
        }
      },
      email: "tracy.davidson@example.com",
      login: {
        uuid: "bc7fb5c5-877d-4304-a09d-46f968fdd862",
        username: "happybear698",
        password: "zorro1",
        salt: "JO0gheL2",
        md5: "dd77beaeadc7095978dff5fc8d276331",
        sha1: "7986fe9c1e98afd3d213b290200bb8b732c9bf2a",
        sha256:
          "f557de74cc39bda0b12b6ca2880bce2e0fd29c221f0cf4a6af09886e2434df25"
      },
      dob: {
        date: "1944-11-26T11:18:21.229Z",
        age: 79
      },
      registered: {
        date: "2008-06-10T06:29:18.866Z",
        age: 16
      },
      phone: "09-8637-3016",
      cell: "0476-035-179",
      id: {
        name: "TFN",
        value: "524463628"
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/74.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/74.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/74.jpg"
      },
      nat: "AU"
    }
  ];

  let crearCartas = " ";

  posts.map(users => {
    crearCartas += ` 
            <div class="card m-2" style="width: 18rem;">
              <img src= ${users.picture.large} class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title"> 
                    ${users.name.title} ${users.name.first} ${users.name.last}
                </h5>
                <p class="card-text">${users.gender}</p>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">${users.email}</li>
                <li class="list-group-item">
                    ${users.location.street.number} ${users.location.street.name}
                </li>
                <li class="list-group-item">${users.phone}</li>
              </ul>
              <div class="card-body">
                <a href="#" class="card-link">${users.id.name}</a>
                <a href="#" class="card-link">${users.id.value}</a>
              </div>
            </div>`;
  });

  let cardContainer = document.querySelector(".card-container");
  cardContainer.innerHTML = crearCartas;
};
