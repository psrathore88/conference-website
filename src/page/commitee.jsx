import { Footer } from '@/sections/footer'
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { motion } from 'framer-motion'
import { OrganizingCommittee } from '@/sections/organizing-committee';
import { Speaker } from 'lucide-react';
import { Speakers } from '@/sections/speakers';


export default function Commitee(){

    const TechnicalCommitteeMembers = [
      {
        name: 'Gopichand Bandarupalli',
        role: 'United Health Group, USA',
        image: '',
      },
      {
        name: 'Manish Kumar Keshri',
        role: 'Meta, USA',
        image: '',
      },

        { 
          name: 'Dr. Vinay Kumar', 
          role: 'Indian Institute of Information Technology, Raipur', 
          image: 'https://www.iiitnr.ac.in/sites/default/files/faculty_photo/vkj.jpg?height=200&width=200' 
        },
        { 
          name: 'Dr. Subrata Dutta', 
          role: 'National Institute of Technology, Jamshedpur', 
          image: 'https://www.nitjsr.ac.in/backend/uploads/Faculty/CS106/profile/5fa86fc6-7ea5-4c7b-b017-e810746495e7.png?height=200&width=200' 
        },
        { 
          name: 'Dr. N. D. Jana', 
          role: 'National Institute of Technology, Durgapur', 
          image: 'https://nitdgp.ac.in/uploads/386fff51724013622aad348f3146aca0.jpeg?height=200&width=200' 
        },
        { 
          name: 'Dr. Santosh Kumar Vipparthi', 
          role: 'Indian Institute of Technology, Ropar', 
          image: 'https://skvipparthi.github.io/img/skv.jpg?height=200&width=200' 
        },
        { 
          name: 'Prof. K. K. Pattanaik', 
          role: 'Indian Institute of Information Technology and Management, Gwalior', 
          image: 'https://iiitm.ac.in/images/demo/teachers/1679281910_KKPattanaik%20(2).jpg?height=200&width=200' 
        },
        { 
          name: 'Dr. R. K. Verma', 
          role: 'Indian Institute of Information Technology, Lucknow', 
          image: 'https://iiitl.ac.in/wp-content/uploads/2021/08/Dr.-Rahul-Kr.-Verma-300x277.jpg?height=200&width=200' 
        },
        { 
          name: 'Dr. Shubhra Jain', 
          role: 'Indian Institute of Information Technology, Lucknow', 
          image: 'https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=WRmdy3UAAAAJ&citpid=1?height=200&width=200' 
        },
        { 
          name: 'Dr. Swalpa Kumar Roy', 
          role: ' Alipurduar Govt. Engineering & Management College, Alipur, India', 
          image: 'https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=1WVrFGwAAAAJ&citpid=1?height=200&width=200' 
        },
        { 
          name: 'Dr. Rana Mukherji', 
          role: 'The ICFAI University, Jaipur', 
          image: 'https://saiconference.com/Computing/Thumbnail/f7ab7bae-bd00-401b-bdc8-64206213538d?height=200&width=200' 
        },
        { 
          name: 'Dr. Ruhul Amin', 
          role: 'Indian Institute of Information Technology, Naya Raipur', 
          image: 'https://www.iiitnr.ac.in/sites/default/files/faculty_photo/ruhul_photo%20%281%29.jpg?height=200&width=200' 
        },
        { 
          name: 'Dr. Arijit Nandi', 
          role: 'Eurecat, Barcelona, Spain', 
          image: '/Ajit.JPG?height=200&width=200' 
        },
        { 
          name: 'Dr. Sanjit Kumar Roy', 
          role: 'Uppsala University, Sweden', 
          image: 'https://mp.uu.se/image/full_image?img_id=993295477&t=1693816585303?height=200&width=200' 
        },
        { 
          name: 'Dr. Ravishankar Mehta', 
          role: 'Indian Institute of Information Technology, Bhagalpur', 
          image: 'https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=SDmfEg0AAAAJ&citpid=4?height=200&width=200' 
        },
        {
          name: 'Dr. Dhruba Joyti Kalita',
          role: 'Indian Institute of Technology Gandhinagar, Gandhinagar, India',
        },
        {
          name: 'Dr. Sk Md Obaidullah',
          role: 'Aliah University, Kolkata, India',
          image: '',
        },
        {
          name: 'Dr. Arunangshu Pal',
          role: 'ICFAI University, Tripura, India',
          image: '',
        },
        {
          name: 'Dr. Sandipan Dhar',
          role: 'Indian Institute of Technology, Bombay, India',
        },
        {
        name: 'Dr. Sanjay Kumar',
        role: 'SRM University AP, Amravati, India',
        image: '',
        },
        {
          name: 'Dr. Prasenjit Das',
          role: 'smartData Enterprises, Panchkula, India',
          image: '',
        }

      ];
      const InternationalAdvisoryCommittee = [
        {
    name: 'Dr. Shitharth Selvarajan',
    role: 'Leeds Beckett University, Leeds, U.K.',
  },
  {
    name: 'Dr. Surbhi Bhatia Khan',
    role: 'University of Salford, U.K.',
  },
  {
    name: 'Prof. DacNhuong Le',
    role: 'Haiphong University, Vietnam',
  },
  {
    name: 'Prof. Danish Ali Khan',
    role: 'National Institute of Technology, Jamshedpur, India',
  },
  {
    name: 'Dr. Binod Kumar Singh',
    role: 'National Institute of Technology, Jamshedpur, India',
  },
  {
    name: 'Dr. Mahima Arawatia',
    role: 'IIT Guwahati, India',
  },
  {
    name: 'Dr. Koninika Pal',
    role: 'CSE, IIT Palakkad, Kanjikode, India',
  },
  {
    name: 'Dr. Suman Banerjee',
    role: 'IIT Jammu, India',
  },
  {
    name: 'Dr. Swalpa Kumar Roy',
    role: 'Tezpur University, Tezpur, India',
  },
  {
    name: 'Prof. Debojyaty Banik',
    role: 'Anurag University, Hyderabad, India',
  },
  {
    name: 'Prof. (Dr.) Parag Rughani',
    role: 'National Forensic Sciences University, Gandhinagar, India',
  },
  {
    name: 'Prof. Neeraj Bharagava',
    role: 'MDSU University, Ajmer, India',
  },
  {
    name: 'Dr. Suman Ghosh',
    role: 'York Business School, London, U.K.',
  },
  {
    name: 'Dr. Rohit Kumar',
    role: 'AstraZeneca, Barcelona, Spain',
  },
  {
    name: 'Prof. Abhishek Pandey',
    role: 'Chandigarh University, Chandigarh, India',
  },
  {
    name: 'Dr. Vinay Kumar',
    role: 'Indian Institute of Information Technology, Raipur, India',
  },
  {
    name: 'Dr. Subrata Dutta',
    role: 'National Institute of Technology, Jamshedpur, India',
  },
  {
    name: 'Dr. N. D. Jana',
    role: 'National Institute of Technology, Durgapur, India',
  },
  {
    name: 'Dr. Anand',
    role: 'NIT Surathkal, India',
  },
  {
    name: 'Prof. Rashmi Agarwal',
    role: 'Manav Rachna University, Faridabad, India',
  },
  {
    name: 'Prof. Sudhanshu Shekhar Patra',
    role: 'KIIT University, Bhubaneswar, India',
  },
  {
    name: 'Prof. Avinash Panwar',
    role: 'MLSU, Udaipur, India',
  },
  {
    name: 'Dr. Pratik Patel',
    role: 'NFSU Gandhinagar, India',
  },
  {
    name: 'Dr. Animesh Roy',
    role: 'IIIT Dharwad, Hubballi, India',
  },
  {
    name: 'Dr. A. Jayanthila Devi',
    role: 'Adichunchanagiri University, India',
  },
  {
    name: 'Dr. Nishant Kumar',
    role: 'IIT Jodhpur, Jodhpur, India',
  },
  {
    name: 'Dr. Nandan Banerji',
    role: 'BIT Mesra, Ranchi, India',
  },
  {
    name: 'Dr. Monu Bhagat',
    role: 'BIT Mesra, Ranchi, India',
  },
  {
    name: 'Dr. Prasenjit Das',
    role: 'smartData Enterprises, Panchkula, India',
  },
  {
    name: 'Dr. Shobit Srivastava',
    role: 'Dr. Ram Manohar Lohia Avadh University, Ayodhya, India',
  },
  {
    name: 'Dr. Abhishek Narwaria',
    role: 'NIT Jalandhar, India',
  },
  {
    name: 'Dr. Subrata Chowdhury',
    role: 'Abdul Hakeem College of Engineering and Technology, Melvisharam, Ranipet, India',
  },
  {
    name: 'Dr. Hashmat Fida',
    role: 'Presidency University, Bangalore, India',
  },
  {
    name: 'Dr. Arijit Nandi',
    role: 'Eurecat, Barcelona, Spain',
  },
  {
    name: 'Dr. Sanjit Kumar Roy',
    role: 'Uppsala University, Sweden',
  },
  {
    name: 'Dr. Ravishankar Mehta',
    role: 'BIT Mesra, Ranchi, India',
  },
  {
    name: 'Dr. Dhruba Joyti Kalita',
    role: 'LNMIIT, Jaipur, India',
  },
  {
    name: 'Dr. Sk. Md. Obaidullah',
    role: 'Aliah University, Kolkata, India',
  },
  {
    name: 'Dr. Sandipan Dhar',
    role: 'Fraunhofer IIS, Germany',
  },
  {
    name: 'Dr. Sanjay Kumar',
    role: 'SRM University AP, Amaravati, India',
  },
  {
    name: 'Mr. Ravinder Singh Rathore',
    role: 'Minneapolis, Minnesota, USA',
  },
  {
    name: 'Prof. Prakash Singh Tanwar',
    role: 'Lovely Professional University, Phagwara, India',
  },
  {
    name: 'Mr. Prabhanshu Sharma',
    role: 'Ebix Inc, India',
  },
  {
    name: 'Dr. Arun Lal Srivastav',
    role: 'Tulas University, Dehradun, India',
  }
       
      ];
      const nationalAdvisoryCommittee = [
          {
            "name": "Prof. Abhishek Pandey",
            "role": "Chandigarh University, Chandigarh, India",
            "image": ""
          },
          {
            "name": "Prof. D. A. Khan",
            "role": "National Institute of Technology, Jamshedpur, India",
            "image": "https://www.nitjsr.ac.in/backend/uploads/Faculty/CA104/profile/0c34d489-4cab-4aca-b8ce-8fb9ebc1de85.png?height=200&width=200"
          },
          {
            "name": "Prof. M. N. Hoda",
            "role": "Bharati Vidyapeeth Institute of Computer Applications and Management (BVICAM), New Delhi, India",
            "image": " "
          },
          {
            "name": "Prof. N. C. Barwar",
            "role": "MBM University, Jodhpur, India",
            "email": "ncbarwar@gmail.com"
          },
          {
            "name": "Prof. Rashmi Agarwal",
            "role": "Manav Rachna University, Faridabad, India",
            "image": ""
          },
          {
            "name": "Dr. Aditya Gupta",
            "role": "Thapar Institute of Engineering & Technology, Patiala, Punjab, India",
            "email": "aditya.gupta@thaper.edu"
          },
          {
            "name": "Dr. Anshul Verma",
            "role": "Banaras Hindu University (BHU), Varanasi, India",
            "image": "https://bhu.ac.in/Content/Photos/Faculties/FA000043.jpeg?height=200&width=200"
          },
          {
            "name": "Dr. Atul Tripathi",
            "role": "Guru Gobind Singh Indraprastha University (GGSIU), Delhi, India",
            "image": ""
          },
          {
            "name": "Dr. Binod Kumar Singh",
            "role": "National Institute of Technology, Jamshedpur, India",
            "image": "/Binod.JPG?height=200&width=200"
          },
          {
            "name": "Dr. Debojyaty Banik",
            "role": "Sri Ramachandra University (SRU), Chennai, India",
            "image": "/Bannik.JPG?height=200&width=200"
          },
          {
            "name": "Dr. Dhanraj Rajesh",
            "role": "Symbiosis International University, Pune, India",
            "image": "https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=8t9sO-QAAAAJ&citpid=2?height=200&width=200"
          },
          {
            "name": "Dr. Geeta Sikka",
            "role": "National Institute of Technology, Delhi, India",
            "image": "https://nitdelhi.ac.in/wp-content/uploads/2024/07/Geeta_Sikka-2.jpg?height=200&width=200"
          },
          {
            "name": "Dr. Geetanjali Rathee",
            "role": "Netaji Subhas Institute of Technology, New Delhi, India",
            "email": "geetanjali.rathee123@gmail.com"
          },
          {
            "name": "Dr. Krishan Kumar Sethi",
            "role": "National Institute of Technology, Patna, India",
            "image": "https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=Hql1qicAAAAJ&citpid=1?height=200&width=200"
          },
          {
            "name": "Dr. Krishan Pal Sharma",
            "role": "National Institute of Technology, Jalandhar, India",
            "image": "https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=QM9qltUAAAAJ&citpid=2?height=200&width=200"
          },
          {
            "name": "Dr. Monu Bhagat",
            "role": "India Institute of Technology Kharagpur, Kharagpur, India",
            "email": "monu98041@gmail.com"
          },
          {
            "name": "Dr. Parul Tomar",
            "role": "J. C. Bose University of Science and Technology, YMCA, Faridabad, India",
            "image": "https://jcboseust.irins.org/assets/profile_images/187152.jpg?height=200&width=200"
          },
          {
            "name": "Dr. Prasenjit Das",
            "role": "smartData Enterprises, Panchkula, India",
            "image": ""
          },
          {
            "name": "Dr. Sandeep Kumar Panda",
            "role": "ICFAI University, Hyderabad, India",
            "email": "sandeeppanda@ifheindia.org"
          },
          {
            "name": "Dr. Saumitra Gangwar",
            "role": "Bennet University, Delhi, India",
            "email": "saumitragangwar@gmail.com"
          },
          {
            "name": "Dr. Shailendra Pratap Singh",
            "role": "Bennett University, Greater Noida, India",
            "image": ""
          },
          {
            "name": "Dr. Shobit Srivastava",
            "role": "Dr. Ram Manohar Lohia Avadh University, Ayodhya, India",
            "image": ""
          },
          {
            "name": "Dr. Sudesh Kumar Prajapati",
            "role": "Indira Gandhi National Tribal University, Amarkantak, India",
            "image": "/Sudesh.jpeg?height=200&width=200"
          },
          {
            "name": "Dr. Vibha Jain",
            "role": "Chitkara University, Chandigarh, India",
            "email": "jvibha0@gmail.com"
          },
          {
            "name": "Dr. Vijay Kumar Vyas",
            "role": "ICFAI University, Jaipur, India",
            "email": ""
          },
          {
            "name": "Mr. Kuldeep",
            "role": "National Informatics Centre, Sikkim, India",
            "image": ""
          },
          {
            "name": "Dr. Abhishek Narwaria",
            "role":"Madhav Institute of Technology & Science, Gwalior, India",
            "image": "",
          }
      ];

  return (
    <motion.section
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    className="py-16 gradientbgt w-full"
  >
  
    {/* International Advisory Committee Section */}
    <motion.section
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    className="py-10 gradientbgt w-full"
  >
    <section className=" gradeintbg">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-8 text-center text-black">
          CONFERENCE ADVISORY COMMITTEE
        </h2>
        <ul className="list-disc pl-6 text-gray-700">
          {InternationalAdvisoryCommittee.map((member) => (
            <li key={member.name}>
              <span className="font-semibold">{member.name}</span><span> </span>{member.role}
            </li>
          ))}
        </ul>
      </div>
    </section>
    </ motion.section>
  
    {/* National Advisory Committee Section */}
        {/* <Speakers /> */}
    <OrganizingCommittee />
  </motion.section>
  )
}
