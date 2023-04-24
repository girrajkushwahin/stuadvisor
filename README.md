### [MIT License](LICENSE)


# Clone this repo using git or download zip from this repo (https://github.com/rootkaalsec/stuadvisor) -

You can download zip from here and then extract zip in your system or you can clone this repo if you have git installed in your Computer.


# Download Node.js, MongoDB and VS Code in your System -

For running this project, you have to download Node.js and MongoDB in your system along with MongoDB Compass.

1. Download Node.js (LTS version) from Node.js official website and install it.

2. Download MongoDB community server from MongoDB official website. By default, MongoDB comes with MongoDB compass. if you will not get MongoDB compass after installing MongoDB then you can also download it externally from MongoDB website. Install both of them. i suggest you to do complete install of MongoDB while installing.

3. Download and install Visual Studio Code.

If you face any problem while doing this, then you can take help from google, youtube, stackoverflow etc.


# Install the dependencies for running the Project -

1. Now, open the client directory available in the 'stuadvisor' folder and then press "Alt + D" to focus on address bar. Clear the text then type cmd and hit enter. Command prompt will be opened inside client directory.

2. Type the following command and then hit enter - 'npm install'. This will install all the dependencies on client side. It can take some time and make sure you have good internet connection.

3. Do the same for server side, open server directory then type "Alt + D" then open command prompt inside server directory and then type 'npm install' for server side also. this will install dependencies for server side too.

4. After doing both tasks of client and server, you have to install one extra tool for server side. Open command prompt inside server directory and install "nodemon" by using following command - 'npm install -g nodemon'


# Run the Server and add data to the database to get good experience of StuAdvisor -

1. Open command prompt inside server directory and run the express server by using following command - 'nodemon app.js'. This will create liveserver for our application.

2. Now open the 'routes' directory available inside server directory and open 'auth.js' file with VS Code and paste the code i am giving in next point before 'module.exports = router' line (at the end of file) and save it (ctrl + s). Don't try to save it more than one time otherwise it will create duplicate data inside our database due to liveserver and then delete the code you pasted there and again save the file. This step is done one time only.

3. The code is given below for adding data in database -

*************************************************************************************************************************************************************************


Review.insertMany([{ name: 'Girraj', review: 'Awesome website helped me to find my dream college', stars: '4 stars' }, { name: 'Ritik', review: 'Best website for downloading notes and sample papers', stars: '3 stars' }, { name: 'Urmila', review: 'Amazing place to read about educational blogs on internet, helped me in my academics', stars: '5 stars' }, { name: 'Susheel', review: 'Good place to get educational news and getting information about govt. exams', stars: '2 stars' }, { name: 'Wasif', review: 'Best platform for students to connect with each other and has nice support', stars: '4 stars' }, { name: 'Abhilasha', review: 'can become more good if have video lectures features for students, perpare platform for it', stars: '1 star' }]);

News.insertMany([{ heading: 'Almost as many students take GRE in India as in US; half from Andhra, Telangana', subheading: 'Number of Indian students taking GRE doubled in past decade to 1.14 lakh. There is only a gap of 10,000 examinees between India and USA', detail: 'The test’s growing popularity in India is in line with the significant increase in the number of Indian nationals enrolled in US graduate schools, with a 48% rise (from 68,869 to 1,02,024) observed in the 2021-2022 academic year. India has almost caught up with the US in the number of students taking the gateway exam for pursuing a Master’s or doctorate in America, thanks to a doubling of Indian test-takers over the past decade, with a gap of just 10,000 examinees separating the two countries.' }, { heading: 'IIM Bodh Gaya launches executive certificate programme in corporate law', subheading: 'The certificate programme aims to provide professionals an understanding of corporate laws and their linkages with various business-related issues.', detail: 'The Indian Institute of Management (IIM), Bodh Gaya has launched its executive certificate programme in corporate law. The 10-month long programme is designed for professionals. The programme will conclude on February 1, 2024. Interested candidates can apply at the official website. This certificate programme aims to provide professionals an understanding of corporate laws and their linkages with various business-related issues. It will deal with corporate governance, regulatory issues, formulating and implementing effective financial strategies with legal prudence. The programme was launched in the presence of Professor Vinita S Sahay, director of IIM Bodh Gaya and programme directors — Professor Sabyasachi Mohapatra, Associate Professor of Finance and Accounting and Professor Soumya Prakash Patra, Assistant Professor of Law and Public Policy. Candidates who have taken up the course were also present at the inauguration event. At the event, Professor Patra stated, “the batch profile is dynamic in nature, which has participants of 30 years of experience to 1.8 years of experience.”' }, { heading: 'NEET UG 2023: Planning to study MBBS from Nepal? Check what all you need', subheading: 'NEET UG 2023: With Nepal being one of the closest neighbours of India, it is coming up as a preferred choice for medical students to pursue MBBS. Check all the important factors', detail: 'NEET UG 2023: Students from India often choose Russia, the Middle East or China as the preferred destination to study medical courses, however, for some years, Nepal has also started attracting Indian students to study MBBS. According to the government data, nearly 2300 students were present in Nepal in 2022, out of which 1437 candidates appeared for the Foreign Medical Graduate Examination (FMGE) and 373 students cleared it. Several experts think that after the Covid pandemic and the Russia–Ukraine war, Indian students’ attention will divert more towards Nepal as the countries not only have cultural similarities and less distance but also similar medical books. The study curriculum in Nepal is divided into three parts, Basic Sciences, Community Medicine and Clinical Medicine. Basic Sciences include Anatomy, Physiology, Biochemistry, Microbiology,  Pathology and Pharmacology whereas Community Medicine includes Epidemiology, Biostatistics, Demography, Health education, Environmental health, Nutrition, Sociology and Clinical Medicine. Clinical Medicine include Community Medicine, Forensic Medicine, Ophthalmology Otorhinolaryngology (ENT), Medicine (including psychiatry and dermatology and venereal disease), Surgery (including orthopaedics anesthesiology, radiology and dental) Obstetrics and Gynaecology Pediatrics.' }, { heading: 'UP Board Exam Results 2023: UPMSP official warns students against fake news', subheading: 'UPMSP UP Board Results 2023: Once released, students can check their score at the official website of the board — upmsp.edu.in.', detail: 'UPMSP UP Board Results 2023: The Uttar Pradesh Madhyamik Parishad (UPMSP) will soon declare the results for Class 10 board exams 2023. However, the UP Board has warned students to not believe the fake news revolving around the board result dates. “Avoid rumors regarding UP Board Exam Result. The official intimation of the test result will be disseminated through suitable medium,” said Dibyakant Shukla, Secretary of Madhyamik Siksha Parisad, Department Of Education (UP Board). A total of 31,16, 487 candidates appeared for the matric exams this year, according to the data released by the state board. Last year, the UP board recorded an overall passing percentage of 88.18 per cent for Class 10. The passing percentage for boys was 85.25 per cent while for girls, it was 91.69 per cent. Additionally, a total of 27,69,258 students had appeared for the class 12 exams this year. In 2022, the UP board recorded an overall pass percentage of 85.33 percent. The overall pass percentage for boys was 81.21 per cent and for the girls it was 90.15 per cent. A total of 22.37 lakh students had appeared for class exams in 2022.' }]);

Blog.insertMany([{
    heading: 'What is IoT? What technologies have made IoT possible?', blog: `<h1>introduction to Internet of things?</h1>
<h3>introduction to IOT</h3><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia fugit autem sequi velit corporis esse alias cupiditate atque eos expedita Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, est. Veniam ullam quod ex ducimus doloremque repudiandae debitis molestiae reprehenderit.</p>
<h3>History of IOT?</h3><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore, modi maxime repellat veritatis fuga in dolorem eveniet quibusdam molestiae minima iusto accusamus odit sequi error tempora repellendus obcaecati odio eligendi possimus aliquid quos? Fugit accusantium ratione vero debitis porro fugiat!</p>
<h1>what is machine learning?</h1><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ea, ducimus asperiores quia impedit commodi? Nam, itaque. Debitis animi sequi distinctio optio obcaecati culpa quaerat vitae dolorem vel. Beatae, eum?</p>
<h3>machine learning types</h3><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis exercitationem unde tempore maxime nemo autem, quo obcaecati hic repellat, adipisci voluptatem enim animi amet! Minima expedita officia vel soluta illo!</p>
<p>machine learning Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora animi molestiae quibusdam iste. Ad minima eius ipsa reprehenderit explicabo! Placeat unde aspernatur adipisci repellendus architecto autem sunt amet nulla ullam.</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt magnam tempore quo. Provident, iusto. Autem illo labore facilis neque libero qui cupiditate deserunt aut, velit, enim, possimus ipsa veniam cumque natus excepturi numquam. Voluptatum non itaque tenetur aut qui corporis?</p>`, category: 'edu', author: 'Admin', gender: 'male'
}, {
    heading: 'What is cloud computing', blog: `<h1>introduction to cloud computing?</h1>
<h3>introduction to cloud computing</h3>
<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia fugit autem sequi velit corporis esse alias cupiditate atque eos expedita Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, est. Veniam ullam quod ex ducimus doloremque repudiandae debitis molestiae reprehenderit.</p>
<h3>History of cloud computing?</h3>
<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore, modi maxime repellat veritatis fuga in dolorem eveniet quibusdam molestiae minima iusto accusamus odit sequi error tempora repellendus obcaecati odio eligendi possimus aliquid quos? Fugit accusantium ratione vero debitis porro fugiat!</p>
<h1>what is EC2 in cloud computing?</h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ea, ducimus asperiores quia impedit commodi? Nam, itaque. Debitis animi sequi distinctio optio obcaecati culpa quaerat vitae dolorem vel. Beatae, eum?</p>
<h3>cloud computing types</h3>
<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis exercitationem unde tempore maxime nemo autem, quo obcaecati hic repellat, adipisci voluptatem enim animi amet! Minima expedita officia vel soluta illo!</p>
<p>machine learning Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora animi molestiae quibusdam iste. Ad minima eius ipsa reprehenderit explicabo! Placeat unde aspernatur adipisci repellendus architecto autem sunt amet nulla ullam.</p>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt magnam tempore quo. Provident, iusto. Autem illo labore facilis neque libero qui cupiditate deserunt aut, velit, enim, possimus ipsa veniam cumque natus excepturi numquam. Voluptatum non itaque tenetur aut qui corporis?</p>`, category: 'edu', author: 'admin', gender: 'female'
}, {
    heading: 'What is Singing?', blog: `<h1>introduction to singing?</h1>
<h3>introduction to singing classes</h3>
<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia fugit autem sequi velit corporis esse alias cupiditate atque eos expedita Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, est. Veniam ullam quod ex ducimus doloremque repudiandae debitis molestiae reprehenderit.</p>
<h3>History of singing ?</h3>
<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore, modi maxime repellat veritatis fuga in dolorem eveniet quibusdam molestiae minima iusto accusamus odit sequi error tempora repellendus obcaecati odio eligendi possimus aliquid quos? Fugit accusantium ratione vero debitis porro fugiat!</p>
<h1>what is vocal in singing?</h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ea, ducimus asperiores quia impedit commodi? Nam, itaque. Debitis animi sequi distinctio optio obcaecati culpa quaerat vitae dolorem vel. Beatae, eum?</p>
<h3>professional singing types</h3>
<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis exercitationem unde tempore maxime nemo autem, quo obcaecati hic repellat, adipisci voluptatem enim animi amet! Minima expedita officia vel soluta illo!</p>
<p>machine learning Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora animi molestiae quibusdam iste. Ad minima eius ipsa reprehenderit explicabo! Placeat unde aspernatur adipisci repellendus architecto autem sunt amet nulla ullam.</p>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt magnam tempore quo. Provident, iusto. Autem illo labore facilis neque libero qui cupiditate deserunt aut, velit, enim, possimus ipsa veniam cumque natus excepturi numquam. Voluptatum non itaque tenetur aut qui corporis?</p>`, category: 'other', author: 'Admin', gender: 'female'
}, {
    heading: 'What is Artificial Intelligence? gift or curse?', blog: `<h1>introduction to Artificial Intelligence?</h1>
<h3>introduction to AI</h3>
<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia fugit autem sequi velit corporis esse alias cupiditate atque eos expedita Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, est. Veniam ullam quod ex ducimus doloremque repudiandae debitis molestiae reprehenderit.</p>
<h3>History of AI?</h3>
<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore, modi maxime repellat veritatis fuga in dolorem eveniet quibusdam molestiae minima iusto accusamus odit sequi error tempora repellendus obcaecati odio eligendi possimus aliquid quos? Fugit accusantium ratione vero debitis porro fugiat!</p>
<h1>what is automation in Artificial Intelligence?</h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ea, ducimus asperiores quia impedit commodi? Nam, itaque. Debitis animi sequi distinctio optio obcaecati culpa quaerat vitae dolorem vel. Beatae, eum?</p>
<h3>Artificial Intelligence types</h3>
<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis exercitationem unde tempore maxime nemo autem, quo obcaecati hic repellat, adipisci voluptatem enim animi amet! Minima expedita officia vel soluta illo!</p>
<p>machine learning Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora animi molestiae quibusdam iste. Ad minima eius ipsa reprehenderit explicabo! Placeat unde aspernatur adipisci repellendus architecto autem sunt amet nulla ullam.</p>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt magnam tempore quo. Provident, iusto. Autem illo labore facilis neque libero qui cupiditate deserunt aut, velit, enim, possimus ipsa veniam cumque natus excepturi numquam. Voluptatum non itaque tenetur aut qui corporis?</p>`, category: 'edu', author: 'Admin', gender: 'male'
}, {
    heading: 'What is Time Management?', blog: `<h1>introduction to Time Management?</h1>
<h3>introduction to time saving</h3>
<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia fugit autem sequi velit corporis esse alias cupiditate atque eos expedita Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, est. Veniam ullam quod ex ducimus doloremque repudiandae debitis molestiae reprehenderit.</p>
<h3>History of time management?</h3>
<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore, modi maxime repellat veritatis fuga in dolorem eveniet quibusdam molestiae minima iusto accusamus odit sequi error tempora repellendus obcaecati odio eligendi possimus aliquid quos? Fugit accusantium ratione vero debitis porro fugiat!</p>
<h1>what is focus in Time Management ?</h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ea, ducimus asperiores quia impedit commodi? Nam, itaque. Debitis animi sequi distinctio optio obcaecati culpa quaerat vitae dolorem vel. Beatae, eum?</p>
<h3>Time Management types</h3>
<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis exercitationem unde tempore maxime nemo autem, quo obcaecati hic repellat, adipisci voluptatem enim animi amet! Minima expedita officia vel soluta illo!</p>
<p>machine learning Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora animi molestiae quibusdam iste. Ad minima eius ipsa reprehenderit explicabo! Placeat unde aspernatur adipisci repellendus architecto autem sunt amet nulla ullam.</p>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt magnam tempore quo. Provident, iusto. Autem illo labore facilis neque libero qui cupiditate deserunt aut, velit, enim, possimus ipsa veniam cumque natus excepturi numquam. Voluptatum non itaque tenetur aut qui corporis?</p>`, category: 'other', author: 'Admin', gender: 'female'
}, {
    heading: 'chatGPT - good vs bad for for developers', blog: `<h1>what is ChatGPT</h1>
<h3>introduction to chatGPT</h3>
<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia fugit autem sequi velit corporis esse alias cupiditate atque eos expedita Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, est. Veniam ullam quod ex ducimus doloremque repudiandae debitis molestiae reprehenderit.</p>
<h3>History of ChatGPT?</h3>
<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore, modi maxime repellat veritatis fuga in dolorem eveniet quibusdam molestiae minima iusto accusamus odit sequi error tempora repellendus obcaecati odio eligendi possimus aliquid quos? Fugit accusantium ratione vero debitis porro fugiat!</p>
<h1>ChatGPT types</h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ea, ducimus asperiores quia impedit commodi? Nam, itaque. Debitis animi sequi distinctio optio obcaecati culpa quaerat vitae dolorem vel. Beatae, eum?</p>
<h3>is CHATGPT future ?</h3>
<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis exercitationem unde tempore maxime nemo autem, quo obcaecati hic repellat, adipisci voluptatem enim animi amet! Minima expedita officia vel soluta illo!</p>
<p>machine learning Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora animi molestiae quibusdam iste. Ad minima eius ipsa reprehenderit explicabo! Placeat unde aspernatur adipisci repellendus architecto autem sunt amet nulla ullam.</p>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt magnam tempore quo. Provident, iusto. Autem illo labore facilis neque libero qui cupiditate deserunt aut, velit, enim, possimus ipsa veniam cumque natus excepturi numquam. Voluptatum non itaque tenetur aut qui corporis?</p>`, category: 'edu', author: 'Admin', gender: 'male'
}]);

TrendingBlog.insertMany([{
    heading: 'What is Artificial Intelligence? gift or curse?', blog: `<h1>introduction to Artificial Intelligence?</h1>
<h3>introduction to AI</h3>
<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia fugit autem sequi velit corporis esse alias cupiditate atque eos expedita Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, est. Veniam ullam quod ex ducimus doloremque repudiandae debitis molestiae reprehenderit.</p>
<h3>History of AI?</h3>
<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore, modi maxime repellat veritatis fuga in dolorem eveniet quibusdam molestiae minima iusto accusamus odit sequi error tempora repellendus obcaecati odio eligendi possimus aliquid quos? Fugit accusantium ratione vero debitis porro fugiat!</p>
<h1>what is automation in Artificial Intelligence?</h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ea, ducimus asperiores quia impedit commodi? Nam, itaque. Debitis animi sequi distinctio optio obcaecati culpa quaerat vitae dolorem vel. Beatae, eum?</p>
<h3>Artificial Intelligence types</h3>
<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis exercitationem unde tempore maxime nemo autem, quo obcaecati hic repellat, adipisci voluptatem enim animi amet! Minima expedita officia vel soluta illo!</p>
<p>machine learning Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora animi molestiae quibusdam iste. Ad minima eius ipsa reprehenderit explicabo! Placeat unde aspernatur adipisci repellendus architecto autem sunt amet nulla ullam.</p>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt magnam tempore quo. Provident, iusto. Autem illo labore facilis neque libero qui cupiditate deserunt aut, velit, enim, possimus ipsa veniam cumque natus excepturi numquam. Voluptatum non itaque tenetur aut qui corporis?</p>`, category: 'edu', author: 'Admin', gender: 'male'
}, {
    heading: 'What is Time Management?', blog: `<h1>introduction to Time Management?</h1>
<h3>introduction to time saving</h3>
<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia fugit autem sequi velit corporis esse alias cupiditate atque eos expedita Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, est. Veniam ullam quod ex ducimus doloremque repudiandae debitis molestiae reprehenderit.</p>
<h3>History of time management?</h3>
<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore, modi maxime repellat veritatis fuga in dolorem eveniet quibusdam molestiae minima iusto accusamus odit sequi error tempora repellendus obcaecati odio eligendi possimus aliquid quos? Fugit accusantium ratione vero debitis porro fugiat!</p>
<h1>what is focus in Time Management ?</h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ea, ducimus asperiores quia impedit commodi? Nam, itaque. Debitis animi sequi distinctio optio obcaecati culpa quaerat vitae dolorem vel. Beatae, eum?</p>
<h3>Time Management types</h3>
<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis exercitationem unde tempore maxime nemo autem, quo obcaecati hic repellat, adipisci voluptatem enim animi amet! Minima expedita officia vel soluta illo!</p>
<p>machine learning Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora animi molestiae quibusdam iste. Ad minima eius ipsa reprehenderit explicabo! Placeat unde aspernatur adipisci repellendus architecto autem sunt amet nulla ullam.</p>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt magnam tempore quo. Provident, iusto. Autem illo labore facilis neque libero qui cupiditate deserunt aut, velit, enim, possimus ipsa veniam cumque natus excepturi numquam. Voluptatum non itaque tenetur aut qui corporis?</p>`, category: 'other', author: 'Admin', gender: 'female'
}, {
    heading: 'chatGPT - good vs bad for for developers', blog: `<h1>what is ChatGPT</h1>
<h3>introduction to chatGPT</h3>
<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia fugit autem sequi velit corporis esse alias cupiditate atque eos expedita Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, est. Veniam ullam quod ex ducimus doloremque repudiandae debitis molestiae reprehenderit.</p>
<h3>History of ChatGPT?</h3>
<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore, modi maxime repellat veritatis fuga in dolorem eveniet quibusdam molestiae minima iusto accusamus odit sequi error tempora repellendus obcaecati odio eligendi possimus aliquid quos? Fugit accusantium ratione vero debitis porro fugiat!</p>
<h1>ChatGPT types</h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ea, ducimus asperiores quia impedit commodi? Nam, itaque. Debitis animi sequi distinctio optio obcaecati culpa quaerat vitae dolorem vel. Beatae, eum?</p>
<h3>is CHATGPT future ?</h3>
<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis exercitationem unde tempore maxime nemo autem, quo obcaecati hic repellat, adipisci voluptatem enim animi amet! Minima expedita officia vel soluta illo!</p>
<p>machine learning Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora animi molestiae quibusdam iste. Ad minima eius ipsa reprehenderit explicabo! Placeat unde aspernatur adipisci repellendus architecto autem sunt amet nulla ullam.</p>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt magnam tempore quo. Provident, iusto. Autem illo labore facilis neque libero qui cupiditate deserunt aut, velit, enim, possimus ipsa veniam cumque natus excepturi numquam. Voluptatum non itaque tenetur aut qui corporis?</p>`, category: 'edu', author: 'Admin', gender: 'male'
}]);

PostedBlog.insertMany([{
    heading: 'Remote Code Execution (RCE)', blog: `<p>Remote code execution is a cyber-attack whereby an attacker can remotely execute commands on someone else’s computing device. Remote code executions (RCEs) usually occur due to malicious malware downloaded by the host and can happen regardless of the device’s geographic location. Remote Code Execution (RCE) is also referred to as Remote Code Evaluation. 
A remote control execution is a broad category of cyber attack technique. It allows a threat actor to execute this remote code on a target machine across the internet, wide area network (WAN), or local area network (LAN). For example, a threat actor in Ukraine could silently place malicious code on a targeted device in the United States. Additionally, RCE enables a threat actor to control a computer or server by executing malicious software. RCE can, of course, lead to the complete takeover of a targeted vulnerable application. 
Execution of an RCE attack sequence is pretty basic. First, the threat actor scans computers across the internet seeking known vulnerabilities that may support a successful attack. Once a targeted vulnerability is identified, the threat actor then performs the exploit to gain access. Now that they are in, they can execute the malicious code to reach their goals, including exfiltrating data, diverting funds, performing detailed surveillance, and disrupting service. 
Code is often injected using the language of the targeted application. The server-side interpreter then executes it for that language. Languages typically include Python, Java, Perl, Ruby, and PHP.  Applications that directly evaluate unvalidated input are usually vulnerable to code injection. It is the case that public web applications are a prime target for threat actors.
The execution of the malicious code is usually accomplished by using terminal commands or perhaps bash scripts. A bash script is a text file that contains commands that would typically be used on a command line. Bash scripts allow the included commands to behave as they would normally. They are generally appended with a “.sh,” but this is not required. Once a bash script is packaged up, the threat actor then loads the code into a vulnerable application that, in turn, executes it. Alternatively, the application may make a call to the kernel to get it executed.</p>`, category: 'edu', author: 'Admin', gender: 'male'
}, {
    heading: 'Cross-site scripting (XSS)', blog: `<h1>What is cross-site scripting (XSS)?</h1><p>Cross-site scripting (also known as XSS) is a web security vulnerability that allows an attacker to compromise the interactions that users have with a vulnerable application. It allows an attacker to circumvent the same origin policy, which is designed to segregate different websites from each other. Cross-site scripting vulnerabilities normally allow an attacker to masquerade as a victim user, to carry out any actions that the user is able to perform, and to access any of the user's data. If the victim user has privileged access within the application, then the attacker might be able to gain full control over all of the application's functionality and data.</p><h3>XSS proof of concept</h3><p>You can confirm most kinds of XSS vulnerability by injecting a payload that causes your own browser to execute some arbitrary JavaScript. It's long been common practice to use the alert() function for this purpose because it's short, harmless, and pretty hard to miss when it's successfully called. In fact, you solve the majority of our XSS labs by invoking alert() in a simulated victim's browser.
Unfortunately, there's a slight hitch if you use Chrome. From version 92 onward (July 20th, 2021), cross-origin iframes are prevented from calling alert(). As these are used to construct some of the more advanced XSS attacks, you'll sometimes need to use an alternative PoC payload. In this scenario, we recommend the print() function. If you're interested in learning more about this change and why we like print(), check out our blog post on the subject.
As the simulated victim in our labs uses Chrome, we've amended the affected labs so that they can also be solved using print(). We've indicated this in the instructions wherever relevant.</p><h3>What are the types of XSS attacks?</h3><p>There are three main types of XSS attacks. These are:
Reflected XSS, where the malicious script comes from the current HTTP request.
Stored XSS, where the malicious script comes from the website's database.
DOM-based XSS, where the vulnerability exists in client-side code rather than server-side code.</p>`, category: 'edu', author: 'Admin', gender: 'female'
}]);

UserUploads.insertMany([{ title: 'unit 1 Basic Computer Engineering', content: 'RGPV notes for BCE 2nd sem - Download Now', path: 'https://onedrive.live.com/download?cid=9F0200C1153A2AA1&resid=9F0200C1153A2AA1%21780&authkey=AJZZSCVFwBcN09Y&em=2', name: 'Admin', gender: 'male' }]);


*************************************************************************************************************************************************************************


# Run the project -

1. For running the project, make sure that your server is running which you have done in previous step for running the server.
2. Now, open command prompt inside client directory and enter this command to run the project - 'npm start'. It will take some time and then browser window will open for interacting with the project.


=> This file will be updated soon to give info about back-end part in which i will tell that how can you add more data in the project...