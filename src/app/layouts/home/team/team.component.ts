import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  ProjectCoordinator: any = [
    {
      name: "Gabriela Alves Werb",
      image: "/assets/img/user/mam.jpeg",
      social_link: "https://www.linkedin.com/in/gabrielaalveswerb/"
    },
  ]

  teams1: any = [
    {
      name: "Md Mahmud Hasan",
      image: "/assets/img/user/1_1.jpeg",
      social_link: "https://www.linkedin.com/in/mahmud-dev/"
    },
    {
      name: "Jyotsana Shankar",
      image: "/assets/img/user/1_2.jpeg",
      social_link: "https://www.linkedin.com/in/jyotsana-shankar/"
    },
    {
      name: "Minhajul Islam Rahid",
      image: "/assets/img/user/1_4.jpeg",
      social_link: "https://www.linkedin.com/in/rahid/"
    },
  ]

  teams2: any = [
    {
      name: "Ali Abbas",
      image: "/assets/img/user/2_1.jpg",
      social_link: "https://www.linkedin.com/in/aliabbas097"
    },
    {
      name: "Binit Bambhroliya",
      image: "/assets/img/user/2_2.jpg",
      social_link: "https://www.linkedin.com/in/binit-bambhroliya"
    },
    {
      name: "Nimra Aziz",
      image: "/assets/img/user/2_3.jpg",
      social_link: "https://www.linkedin.com/in/nimraaziz77/"
    },
    {
      name: "Raj Sonawala",
      image: "/assets/img/user/2_4.png",
      social_link: "https://www.linkedin.com/in/raj-sonawala-413601184/"
    }
  ]

  teams3: any = [
    {
      name: "Shoaib Iftikhar",
      image: "/assets/img/user/3_1.jpg",
      social_link: "https://www.linkedin.com/in/shoaib-iftikhar-60a3a5169/"
    },
    {
      name: "Quazi Ameer Hammad",
      image: "/assets/img/user/3_2.jpg",
      social_link: "http://www.linkedin.com/in/qazi-ameer-hammad"
    },
    {
      name: "Nikhitha Yerrathota",
      image: "/assets/img/user/3_3.jpeg",
      social_link: "https://www.linkedin.com/in/nikhitha-yerrathota-7929061a1"
    },
    {
      name: "MD R M Yusuf Naeem",
      image: "/assets/img/user/3_4.jpg",
      social_link: "https://www.linkedin.com/in/mahbubnayeem007/"
    }
  ]

  teams4: any = [
    {
      name: "Priyank Dudhat",
      image: "/assets/img/user/4_1.jpg",
      social_link: "https://www.linkedin.com/in/priyankdudhat13/"
    },
    {
      name: "Parth Saliya",
      image: "/assets/img/user/4_2.jpeg",
      social_link: "https://www.linkedin.com/in/parth-saliya-09b814213/"
    },
    {
      name: "Milan Sangani",
      image: "/assets/img/user/4_3.jpeg",
      social_link: "http://www.linkedin.com/in/milankumar-sangani-594162213"
    },
    {
      name: "Hardik Dudhat",
      image: "/assets/img/user/4_4.JPG",
      social_link: "https://www.linkedin.com/in/hardikkumar-vrajlal-dudhat-a345b215a"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
