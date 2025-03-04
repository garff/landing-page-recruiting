'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Calendar,
  User,
  Clock,
  ArrowLeft,
  Share2,
  Bookmark,
  ThumbsUp,
} from 'lucide-react';

// Blog post type definition
type BlogPost = {
  id: string;
  title: string;
  titleDa?: string;
  excerpt: string;
  excerptDa?: string;
  content: string;
  contentDa?: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  categoryKey:
    | 'aiTechnology'
    | 'resumeTips'
    | 'interviewTips'
    | 'careerAdvice'
    | 'workplaceTrends';
  image: string;
  featured?: boolean;
};

// Sample blog posts data
const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'How AI is Revolutionizing the Job Application Process',
    titleDa: 'Hvordan AI revolutionerer jobansøgningsprocessen',
    excerpt:
      'Discover how artificial intelligence is transforming the way people apply for jobs and how employers find talent.',
    excerptDa:
      'Opdag hvordan kunstig intelligens transformerer måden, folk søger job på, og hvordan arbejdsgivere finder talent.',
    content: `
      <p>The job application process has traditionally been time-consuming and often frustrating for both applicants and employers. However, artificial intelligence is rapidly changing this landscape, making the process more efficient, personalized, and effective for all parties involved.</p>
      
      <h2>AI-Powered Resume Screening</h2>
      <p>One of the most significant impacts of AI on the job application process is in resume screening. Traditional methods required HR professionals to manually review hundreds or even thousands of resumes for a single position, which was not only time-consuming but also prone to human bias and error.</p>
      <p>Today, AI-powered applicant tracking systems (ATS) can scan resumes for relevant keywords, experience, and skills in seconds. These systems can evaluate candidates based on predetermined criteria and rank them according to their suitability for the position. This not only saves time but also helps to standardize the initial screening process.</p>
      
      <h2>Personalized Job Matching</h2>
      <p>AI algorithms are now sophisticated enough to match candidates with job opportunities based on their skills, experience, and preferences. These systems analyze vast amounts of data to identify patterns and make predictions about which candidates are likely to succeed in specific roles.</p>
      <p>For job seekers, this means receiving more relevant job recommendations. For employers, it means finding candidates who are not only qualified but also likely to be a good fit for the company culture and the specific requirements of the role.</p>
      
      <h2>Enhanced Candidate Experience</h2>
      <p>AI-powered chatbots and virtual assistants are improving the candidate experience by providing immediate responses to inquiries, guiding applicants through the application process, and offering personalized feedback. These tools can be available 24/7, ensuring that candidates receive support whenever they need it.</p>
      <p>Furthermore, AI can help to keep candidates informed about the status of their application, reducing the frustration of the "black hole" that many job seekers experience after submitting their resume.</p>
      
      <h2>Reducing Bias in Hiring</h2>
      <p>When properly designed and implemented, AI can help to reduce bias in the hiring process. By focusing on skills, experience, and other objective criteria, AI systems can help to minimize the impact of unconscious bias that may influence human decision-makers.</p>
      <p>However, it's important to note that AI systems are only as unbiased as the data they are trained on and the algorithms that power them. Companies must be vigilant in ensuring that their AI tools do not perpetuate existing biases.</p>
      
      <h2>The Future of AI in Job Applications</h2>
      <p>As AI technology continues to evolve, we can expect to see even more innovative applications in the job search process. From video interviews analyzed by AI to predict candidate success, to gamified assessments that evaluate skills in a more engaging way, the possibilities are vast.</p>
      <p>For job seekers, this means that understanding how to optimize their applications for AI screening is becoming increasingly important. For employers, it means having access to more sophisticated tools to identify the best talent for their organizations.</p>
      
      <h2>Conclusion</h2>
      <p>AI is revolutionizing the job application process, making it more efficient, personalized, and effective. While there are challenges to address, such as ensuring that AI systems are unbiased and transparent, the benefits for both job seekers and employers are significant.</p>
      <p>As we move forward, those who embrace and adapt to these technological changes will have a competitive advantage in the job market. Whether you're a job seeker looking to stand out or an employer seeking the best talent, understanding and leveraging AI in the application process is becoming essential in today's digital economy.</p>
    `,
    contentDa: `
      <p>Jobansøgningsprocessen har traditionelt været tidskrævende og ofte frustrerende for både ansøgere og arbejdsgivere. Kunstig intelligens ændrer dog hurtigt dette landskab og gør processen mere effektiv, personlig og effektiv for alle involverede parter.</p>
      
      <h2>AI-drevet CV-screening</h2>
      <p>En af de mest betydningsfulde påvirkninger af AI på jobansøgningsprocessen er inden for CV-screening. Traditionelle metoder krævede, at HR-fagfolk manuelt gennemgik hundredvis eller endda tusindvis af CV'er for en enkelt stilling, hvilket ikke kun var tidskrævende, men også tilbøjelig til menneskelig bias og fejl.</p>
      <p>I dag kan AI-drevne ansøgningssporingssystemer (ATS) scanne CV'er for relevante nøgleord, erfaring og færdigheder på få sekunder. Disse systemer kan evaluere kandidater baseret på forudbestemte kriterier og rangere dem efter deres egnethed til stillingen. Dette sparer ikke kun tid, men hjælper også med at standardisere den indledende screeningsproces.</p>
      
      <h2>Personligt jobmatch</h2>
      <p>AI-algoritmer er nu sofistikerede nok til at matche kandidater med jobmuligheder baseret på deres færdigheder, erfaring og præferencer. Disse systemer analyserer store mængder data for at identificere mønstre og lave forudsigelser om, hvilke kandidater der sandsynligvis vil have succes i specifikke roller.</p>
      <p>For jobsøgende betyder dette at modtage mere relevante jobanbefalinger. For arbejdsgivere betyder det at finde kandidater, der ikke kun er kvalificerede, men også sandsynligvis vil passe godt ind i virksomhedskulturen og de specifikke krav til rollen.</p>
      
      <h2>Forbedret kandidatoplevelse</h2>
      <p>AI-drevne chatbots og virtuelle assistenter forbedrer kandidatoplevelsen ved at give øjeblikkelige svar på forespørgsler, guide ansøgere gennem ansøgningsprocessen og tilbyde personlig feedback. Disse værktøjer kan være tilgængelige 24/7, hvilket sikrer, at kandidater modtager support, når de har brug for det.</p>
      <p>Desuden kan AI hjælpe med at holde kandidater informeret om status på deres ansøgning, hvilket reducerer frustrationen over det "sorte hul", som mange jobsøgende oplever efter at have indsendt deres CV.</p>
      
      <h2>Reduktion af bias i ansættelsesprocessen</h2>
      <p>Når AI er korrekt designet og implementeret, kan det hjælpe med at reducere bias i ansættelsesprocessen. Ved at fokusere på færdigheder, erfaring og andre objektive kriterier kan AI-systemer hjælpe med at minimere påvirkningen af ubevidst bias, der kan påvirke menneskelige beslutningstagere.</p>
      <p>Det er dog vigtigt at bemærke, at AI-systemer kun er så upartiske som de data, de er trænet på, og de algoritmer, der driver dem. Virksomheder skal være opmærksomme på at sikre, at deres AI-værktøjer ikke viderefører eksisterende bias.</p>
      
      <h2>Fremtiden for AI i jobansøgninger</h2>
      <p>Efterhånden som AI-teknologien fortsætter med at udvikle sig, kan vi forvente at se endnu flere innovative anvendelser i jobsøgningsprocessen. Fra videointerviews analyseret af AI til at forudsige kandidatsucces, til gamificerede vurderinger, der evaluerer færdigheder på en mere engagerende måde, er mulighederne enorme.</p>
      <p>For jobsøgende betyder dette, at forståelse af, hvordan man optimerer sine ansøgninger til AI-screening, bliver stadig vigtigere. For arbejdsgivere betyder det at have adgang til mere sofistikerede værktøjer til at identificere det bedste talent til deres organisationer.</p>
      
      <h2>Konklusion</h2>
      <p>AI revolutionerer jobansøgningsprocessen og gør den mere effektiv, personlig og effektiv. Mens der er udfordringer at adressere, såsom at sikre, at AI-systemer er upartiske og gennemsigtige, er fordelene for både jobsøgende og arbejdsgivere betydelige.</p>
      <p>Når vi bevæger os fremad, vil de, der omfavner og tilpasser sig disse teknologiske ændringer, have en konkurrencemæssig fordel på jobmarkedet. Uanset om du er en jobsøgende, der ønsker at skille sig ud, eller en arbejdsgiver, der søger det bedste talent, bliver forståelse og udnyttelse af AI i ansøgningsprocessen afgørende i dagens digitale økonomi.</p>
    `,
    author: 'Maria Jensen',
    date: '2025-04-15',
    readTime: '5 min',
    category: 'AI Technology',
    categoryKey: 'aiTechnology',
    image:
      'https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1000',
    featured: true,
  },
  {
    id: '2',
    title: '10 Resume Tips That Will Get You Noticed in 2025',
    titleDa: '10 CV-tips, der vil få dig bemærket i 2025',
    excerpt:
      'Learn the latest resume trends and techniques that will help your application stand out from the crowd.',
    excerptDa:
      'Lær de seneste CV-tendenser og teknikker, der vil hjælpe din ansøgning med at skille sig ud fra mængden.',
    content: `
      <p>In today's competitive job market, having a standout resume is more important than ever. As we move into 2025, the expectations and standards for resumes continue to evolve. Here are ten essential tips to ensure your resume gets noticed by employers and makes it past the increasingly sophisticated applicant tracking systems (ATS).</p>
      
      <h2>1. Optimize for AI and ATS</h2>
      <p>Most companies now use AI-powered applicant tracking systems to screen resumes before they ever reach human eyes. To ensure your resume makes it through this initial screening:</p>
      <ul>
        <li>Use standard section headings (e.g., "Experience," "Education," "Skills")</li>
        <li>Incorporate relevant keywords from the job description</li>
        <li>Avoid complex formatting, tables, or graphics that ATS might not process correctly</li>
        <li>Use a clean, ATS-friendly template</li>
      </ul>
      
      <h2>2. Showcase Quantifiable Achievements</h2>
      <p>Numbers speak louder than generic descriptions. Whenever possible, quantify your achievements:</p>
      <ul>
        <li>"Increased sales by 35% within six months"</li>
        <li>"Managed a team of 12 developers across 3 international offices"</li>
        <li>"Reduced customer complaint rate by 28% through improved training protocols"</li>
      </ul>
      
      <h2>3. Highlight Relevant Skills</h2>
      <p>In 2025, employers are looking for a combination of technical and soft skills. Include a dedicated skills section that highlights:</p>
      <ul>
        <li>Technical skills relevant to your industry</li>
        <li>Proficiency with industry-specific software and tools</li>
        <li>Soft skills like communication, leadership, and adaptability</li>
        <li>Language proficiencies and certifications</li>
      </ul>
      
      <h2>4. Tailor Your Resume for Each Application</h2>
      <p>One-size-fits-all resumes are less effective than ever. For each job application:</p>
      <ul>
        <li>Analyze the job description for key requirements and priorities</li>
        <li>Adjust your professional summary to align with the specific role</li>
        <li>Reorganize your experience to emphasize the most relevant achievements</li>
        <li>Customize your skills section to match what the employer is seeking</li>
      </ul>
      
      <h2>5. Include a Professional Summary</h2>
      <p>Begin your resume with a compelling professional summary that:</p>
      <ul>
        <li>Concisely presents your professional identity in 3-4 sentences</li>
        <li>Highlights your most impressive achievements and skills</li>
        <li>Includes relevant industry keywords</li>
        <li>Clearly communicates your career goals and value proposition</li>
      </ul>
      
      <h2>6. Demonstrate Adaptability and Continuous Learning</h2>
      <p>In rapidly evolving industries, employers value candidates who can adapt and grow:</p>
      <ul>
        <li>Include recent certifications, courses, or training programs</li>
        <li>Highlight examples of how you've adapted to changes in your industry</li>
        <li>Mention self-directed learning initiatives</li>
        <li>Showcase cross-functional skills and experiences</li>
      </ul>
      
      <h2>7. Keep It Concise and Focused</h2>
      <p>Recruiters typically spend only seconds scanning a resume initially:</p>
      <ul>
        <li>Limit your resume to 1-2 pages (unless you're in academia or certain specialized fields)</li>
        <li>Use bullet points rather than paragraphs for better readability</li>
        <li>Focus on the last 10-15 years of experience (unless earlier experience is particularly relevant)</li>
        <li>Eliminate redundancies and unnecessary details</li>
      </ul>
      
      <h2>8. Incorporate Keywords Naturally</h2>
      <p>While keywords are essential for ATS, they should be integrated naturally:</p>
      <ul>
        <li>Analyze job descriptions to identify recurring terms and phrases</li>
        <li>Include these keywords in context throughout your resume</li>
        <li>Use industry-standard terminology</li>
        <li>Avoid "keyword stuffing" which can make your resume sound unnatural</li>
      </ul>
      
      <h2>9. Add a Digital Dimension</h2>
      <p>In 2025, resumes often extend beyond the traditional document:</p>
      <ul>
        <li>Include links to your professional social media profiles</li>
        <li>Add a QR code linking to your portfolio or LinkedIn profile</li>
        <li>Reference digital projects or content you've created</li>
        <li>Consider creating a supplementary video resume for certain industries</li>
      </ul>
      
      <h2>10. Proofread Meticulously</h2>
      <p>Even with all the technological advances, attention to detail remains crucial:</p>
      <ul>
        <li>Use grammar and spell-checking tools</li>
        <li>Have someone else review your resume</li>
        <li>Read your resume aloud to catch awkward phrasing</li>
        <li>Check for consistent formatting, spacing, and punctuation</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Creating a resume that stands out in 2025 requires a strategic approach that balances AI optimization with compelling content that showcases your unique value. By implementing these ten tips, you'll create a resume that not only passes through automated screening systems but also impresses hiring managers and increases your chances of landing interviews for your target positions.</p>
    `,
    contentDa: `
      <p>I dagens konkurrenceprægede jobmarked er det vigtigere end nogensinde at have et fremtrædende CV. Når vi bevæger os ind i 2025, fortsætter forventningerne og standarderne for CV'er med at udvikle sig. Her er ti essentielle tips til at sikre, at dit CV bliver bemærket af arbejdsgivere og kommer igennem de stadig mere sofistikerede ansøgningssporingssystemer (ATS).</p>
      
      <h2>1. Optimer til AI og ATS</h2>
      <p>De fleste virksomheder bruger nu AI-drevne ansøgningssporingssystemer til at screene CV'er, før de nogensinde når menneskelige øjne. For at sikre, at dit CV kommer igennem denne indledende screening:</p>
      <ul>
        <li>Brug standard sektionsoverskrifter (f.eks. "Erfaring", "Uddannelse", "Færdigheder")</li>
        <li>Inkorporer relevante nøgleord fra jobbeskrivelsen</li>
        <li>Undgå kompleks formatering, tabeller eller grafik, som ATS muligvis ikke behandler korrekt</li>
        <li>Brug en ren, ATS-venlig skabelon</li>
      </ul>
      
      <h2>2. Fremvis kvantificerbare præstationer</h2>
      <p>Tal taler højere end generiske beskrivelser. Når det er muligt, kvantificer dine præstationer:</p>
      <ul>
        <li>"Øgede salget med 35% inden for seks måneder"</li>
        <li>"Ledede et team på 12 udviklere på tværs af 3 internationale kontorer"</li>
        <li>"Reducerede kundeklagerate med 28% gennem forbedrede træningsprotokoller"</li>
      </ul>
      
      <h2>3. Fremhæv relevante færdigheder</h2>
      <p>I 2025 leder arbejdsgivere efter en kombination af tekniske og bløde færdigheder. Inkluder en dedikeret færdighedssektion, der fremhæver:</p>
      <ul>
        <li>Tekniske færdigheder relevante for din branche</li>
        <li>Kendskab til branchespecifik software og værktøjer</li>
        <li>Bløde færdigheder som kommunikation, lederskab og tilpasningsevne</li>
        <li>Sprogkundskaber og certificeringer</li>
      </ul>
      
      <h2>4. Skræddersy dit CV til hver ansøgning</h2>
      <p>One-size-fits-all CV'er er mindre effektive end nogensinde. For hver jobansøgning:</p>
      <ul>
        <li>Analyser jobbeskrivelsen for nøglekrav og prioriteter</li>
        <li>Juster dit professionelle resumé til at passe til den specifikke rolle</li>
        <li>Omorganiser din erfaring for at fremhæve de mest relevante præstationer</li>
        <li>Tilpas din færdighedssektion til at matche, hvad arbejdsgiveren søger</li>
      </ul>
      
      <h2>5. Inkluder et professionelt resumé</h2>
      <p>Begynd dit CV med et overbevisende professionelt resumé, der:</p>
      <ul>
        <li>Kortfattet præsenterer din professionelle identitet i 3-4 sætninger</li>
        <li>Fremhæver dine mest imponerende præstationer og færdigheder</li>
        <li>Inkluderer relevante branchenøgleord</li>
        <li>Klart kommunikerer dine karrieremål og værdiforslag</li>
      </ul>
      
      <h2>6. Demonstrer tilpasningsevne og kontinuerlig læring</h2>
      <p>I hurtigt udviklende brancher værdsætter arbejdsgivere kandidater, der kan tilpasse sig og vokse:</p>
      <ul>
        <li>Inkluder nylige certificeringer, kurser eller træningsprogrammer</li>
        <li>Fremhæv eksempler på, hvordan du har tilpasset dig ændringer i din branche</li>
        <li>Nævn selvstyrende læringsinitiativer</li>
        <li>Fremvis tværfunktionelle færdigheder og erfaringer</li>
      </ul>
      
      <h2>7. Hold det kortfattet og fokuseret</h2>
      <p>Rekrutterere bruger typisk kun sekunder på at scanne et CV indledningsvist:</p>
      <ul>
        <li>Begræns dit CV til 1-2 sider (medmindre du er i den akademiske verden eller visse specialiserede områder)</li>
        <li>Brug punktopstillinger i stedet for afsnit for bedre læsbarhed</li>
        <li>Fokuser på de sidste 10-15 års erfaring (medmindre tidligere erfaring er særligt relevant)</li>
        <li>Eliminer redundans og unødvendige detaljer</li>
      </ul>
      
      <h2>8. Inkorporer nøgleord naturligt</h2>
      <p>Mens nøgleord er essentielle for ATS, bør de integreres naturligt:</p>
      <ul>
        <li>Analyser jobbeskrivelser for at identificere tilbagevendende termer og fraser</li>
        <li>Inkluder disse nøgleord i kontekst gennem hele dit CV</li>
        <li>Brug branchestandardterminologi</li>
        <li>Undgå "nøgleordsstopning", som kan få dit CV til at lyde unaturligt</li>
      </ul>
      
      <h2>9. Tilføj en digital dimension</h2>
      <p>I 2025 strækker CV'er sig ofte ud over det traditionelle dokument:</p>
      <ul>
        <li>Inkluder links til dine professionelle sociale medieprofiler</li>
        <li>Tilføj en QR-kode, der linker til din portfolio eller LinkedIn-profil</li>
        <li>Henvis til digitale projekter eller indhold, du har skabt</li>
        <li>Overvej at oprette et supplerende video-CV for visse brancher</li>
      </ul>
      
      <h2>10. Korrekturlæs omhyggeligt</h2>
      <p>Selv med alle de teknologiske fremskridt forbliver opmærksomhed på detaljer afgørende:</p>
      <ul>
        <li>Brug grammatik- og stavekontrolværktøjer</li>
        <li>Få en anden til at gennemgå dit CV</li>
        <li>Læs dit CV højt for at fange akavet formulering</li>
        <li>Tjek for konsistent formatering, mellemrum og tegnsætning</li>
      </ul>
      
      <h2>Konklusion</h2>
      <p>At skabe et CV, der skiller sig ud i 2025, kræver en strategisk tilgang, der balancerer AI-optimering med overbevisende indhold, der fremviser din unikke værdi. Ved at implementere disse ti tips vil du skabe et CV, der ikke kun passerer gennem automatiserede screeningssystemer, men også imponerer ansættelsesansvarlige og øger dine chancer for at lande interviews til dine målpositioner.</p>
    `,
    author: 'Thomas Nielsen',
    date: '2025-04-10',
    readTime: '7 min',
    category: 'Resume Tips',
    categoryKey: 'resumeTips',
    image:
      'https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=1000',
  },
  {
    id: '3',
    title: 'The Future of Work: Remote vs. Hybrid Models',
    titleDa: 'Fremtidens arbejde: Fjernarbejde vs. hybride modeller',
    excerpt:
      'An in-depth analysis of how work arrangements are evolving and what it means for job seekers and employers.',
    excerptDa:
      'En dybdegående analyse af hvordan arbejdsordninger udvikler sig, og hvad det betyder for jobsøgende og arbejdsgivere.',
    content: `
      <p>The landscape of work has undergone a dramatic transformation in recent years, accelerated by global events that forced organizations to rethink traditional office-based models. As we move forward, two primary work arrangements have emerged as dominant alternatives to the conventional 9-to-5 office setup: fully remote work and hybrid models. This article explores the advantages, challenges, and future trajectory of these work arrangements.</p>
      
      <h2>The Rise of Remote Work</h2>
      <p>Remote work, once considered a perk offered by forward-thinking companies, has become mainstream. This model allows employees to work entirely from locations outside the traditional office, whether that's their home, a coffee shop, or even another country.</p>
      
      <h3>Advantages of Remote Work</h3>
      <ul>
        <li><strong>Global Talent Pool:</strong> Companies can hire the best talent regardless of geographic location.</li>
        <li><strong>Reduced Overhead Costs:</strong> Significant savings on office space, utilities, and related expenses.</li>
        <li><strong>Increased Productivity:</strong> Many employees report higher productivity without office distractions.</li>
        <li><strong>Work-Life Balance:</strong> Elimination of commuting time and more flexibility for personal responsibilities.</li>
        <li><strong>Environmental Benefits:</strong> Reduced commuting leads to lower carbon emissions.</li>
      </ul>
      
      <h3>Challenges of Remote Work</h3>
      <ul>
        <li><strong>Collaboration Hurdles:</strong> Spontaneous interactions and creative collaboration can be more difficult.</li>
        <li><strong>Onboarding Complexity:</strong> Integrating new team members requires more intentional effort.</li>
        <li><strong>Work-Home Boundaries:</strong> Some employees struggle to separate professional and personal life.</li>
        <li><strong>Digital Fatigue:</strong> Constant video meetings can lead to exhaustion.</li>
        <li><strong>Cultural Cohesion:</strong> Building and maintaining company culture requires new approaches.</li>
      </ul>
      
      <h2>The Hybrid Work Model</h2>
      <p>Hybrid work combines elements of both remote and in-office work, typically allowing employees to split their time between working remotely and coming into a physical office. This model aims to capture the benefits of both approaches.</p>
      
      <h3>Advantages of Hybrid Work</h3>
      <ul>
        <li><strong>Flexibility with Structure:</strong> Employees enjoy flexibility while maintaining regular in-person connections.</li>
        <li><strong>Optimized Collaboration:</strong> In-office days can be coordinated for meetings and collaborative projects.</li>
        <li><strong>Reduced Real Estate Costs:</strong> Companies can downsize office space while maintaining a physical presence.</li>
        <li><strong>Employee Satisfaction:</strong> Many workers prefer the balance of remote and in-office work.</li>
        <li><strong>Inclusivity:</strong> Accommodates different working styles and personal circumstances.</li>
      </ul>
      
      <h3>Challenges of Hybrid Work</h3>
      <ul>
        <li><strong>Scheduling Complexity:</strong> Coordinating when teams should be in-office requires careful planning.</li>
        <li><strong>Potential Inequality:</strong> Risk of creating "two-tier" workforce between remote and in-office employees.</li>
        <li><strong>Technology Requirements:</strong> Need for seamless integration between in-office and remote participants.</li>
        <li><strong>Office Space Redesign:</strong> Traditional offices may need reconfiguration for hybrid purposes.</li>
        <li><strong>Management Challenges:</strong> Supervisors must adapt to managing both in-person and remote team members.</li>
      </ul>
      
      <h2>Industry Variations</h2>
      <p>The adoption of remote and hybrid models varies significantly across industries:</p>
      <ul>
        <li><strong>Technology:</strong> Leading the way in remote work adoption, with many tech companies offering permanent remote options.</li>
        <li><strong>Finance:</strong> Initially resistant but increasingly adopting hybrid models with structured in-office requirements.</li>
        <li><strong>Healthcare:</strong> Patient-facing roles remain in-person, while administrative functions increasingly move to hybrid models.</li>
        <li><strong>Education:</strong> Developing hybrid approaches that combine in-person and online learning experiences.</li>
        <li><strong>Manufacturing:</strong> Production roles remain on-site, while support functions adopt more flexible arrangements.</li>
      </ul>
      
      <h2>The Future Trajectory</h2>
      <p>As we look ahead, several trends are emerging that will shape the future of work:</p>
      
      <h3>1. Personalized Work Arrangements</h3>
      <p>Rather than one-size-fits-all policies, companies are increasingly offering personalized work arrangements based on role requirements, team dynamics, and individual preferences. This customization recognizes that different functions and personalities may thrive in different environments.</p>
      
      <h3>2. Results-Based Evaluation</h3>
      <p>The shift away from "time in seat" to outcome-based performance evaluation continues to accelerate. Companies are focusing more on what employees accomplish rather than when or where they work.</p>
      
      <h3>3. Technology Evolution</h3>
      <p>Continued advances in collaboration tools, virtual reality, and augmented reality will make remote collaboration increasingly seamless. Virtual workspaces may eventually replicate many aspects of in-person interaction.</p>
      
      <h3>4. Asynchronous Work</h3>
      <p>Beyond the question of location is the question of timing. More companies are embracing asynchronous work, allowing employees to work at times that suit their productivity patterns and life circumstances.</p>
      
      <h3>5. "Third Workplaces"</h3>
      <p>Beyond the binary of home or office, we're seeing the rise of "third workplaces" - coworking spaces, satellite offices, or other locations that offer professional environments closer to employees' homes.</p>
      
      <h2>Implications for Job Seekers and Employers</h2>
      
      <h3>For Job Seekers:</h3>
      <ul>
        <li>Highlight remote work skills like self-motivation, digital communication, and time management</li>
        <li>Research company policies on remote and hybrid work before applying</li>
        <li>Consider geographic flexibility as a competitive advantage</li>
        <li>Invest in creating an effective home office setup</li>
        <li>Develop strategies for visibility and career advancement in remote settings</li>
      </ul>
      
      <h3>For Employers:</h3>
      <ul>
        <li>Clearly communicate work arrangement policies in job postings</li>
        <li>Invest in technology that supports seamless collaboration</li>
        <li>Develop management practices suited to distributed teams</li>
        <li>Create intentional opportunities for team building and culture development</li>
        <li>Consider work arrangements as part of the overall employee value proposition</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>The debate between remote and hybrid work models isn't moving toward a single universal solution. Instead, we're seeing an evolution toward more nuanced, flexible approaches that recognize the diversity of work requirements, organizational needs, and individual preferences.</p>
      <p>What's clear is that the traditional office-centric model has permanently changed. Organizations that thoughtfully design their work arrangements - considering productivity, collaboration, employee well-being, and business requirements - will have a significant advantage in attracting and retaining talent in the competitive landscape of the future.</p>
      <p>As we move forward, the most successful organizations won't be those that simply choose between remote or hybrid models, but those that create thoughtful, intentional approaches to work that leverage the benefits of flexibility while addressing its challenges.</p>
    `,
    contentDa: `
      <p>Arbejdslandskabet har gennemgået en dramatisk transformation i de seneste år, accelereret af globale begivenheder, der tvang organisationer til at gentænke traditionelle kontorbaserede modeller. Når vi bevæger os fremad, er to primære arbejdsordninger dukket op som dominerende alternativer til den konventionelle 9-til-5 kontoropsætning: fuldt fjernarbejde og hybride modeller. Denne artikel udforsker fordelene, udfordringerne og den fremtidige udvikling af disse arbejdsordninger.</p>
      
      <h2>Fremkomsten af fjernarbejde</h2>
      <p>Fjernarbejde, der engang blev betragtet som en fordel tilbudt af fremsynede virksomheder, er blevet mainstream. Denne model tillader medarbejdere at arbejde helt fra steder uden for det traditionelle kontor, hvad enten det er deres hjem, en kaffebar eller endda et andet land.</p>
      
      <h3>Fordele ved fjernarbejde</h3>
      <ul>
        <li><strong>Global talentpulje:</strong> Virksomheder kan ansætte det bedste talent uanset geografisk placering.</li>
        <li><strong>Reducerede overheadomkostninger:</strong> Betydelige besparelser på kontorplads, forsyninger og relaterede udgifter.</li>
        <li><strong>Øget produktivitet:</strong> Mange medarbejdere rapporterer højere produktivitet uden kontorforstyrrelser.</li>
        <li><strong>Work-life balance:</strong> Eliminering af pendlertid og mere fleksibilitet til personlige forpligtelser.</li>
        <li><strong>Miljømæssige fordele:</strong> Reduceret pendling fører til lavere CO2-udledning.</li>
      </ul>
      
      <h3>Udfordringer ved fjernarbejde</h3>
      <ul>
        <li><strong>Samarbejdshindringer:</strong> Spontane interaktioner og kreativt samarbejde kan være vanskeligere.</li>
        <li><strong>Onboarding-kompleksitet:</strong> Integration af nye teammedlemmer kræver mere bevidst indsats.</li>
        <li><strong>Arbejde-hjem-grænser:</strong> Nogle medarbejdere kæmper med at adskille professionelt og personligt liv.</li>
        <li><strong>Digital træthed:</strong> Konstante videomøder kan føre til udmattelse.</li>
        <li><strong>Kulturel sammenhæng:</strong> Opbygning og vedligeholdelse af virksomhedskultur kræver nye tilgange.</li>
      </ul>
      
      <h2>Den hybride arbejdsmodel</h2>
      <p>Hybrid arbejde kombinerer elementer af både fjernarbejde og kontorarbejde, typisk ved at tillade medarbejdere at dele deres tid mellem at arbejde eksternt og komme ind på et fysisk kontor. Denne model sigter mod at fange fordelene ved begge tilgange.</p>
      
      <h3>Fordele ved hybrid arbejde</h3>
      <ul>
        <li><strong>Fleksibilitet med struktur:</strong> Medarbejdere nyder fleksibilitet, mens de opretholder regelmæssige personlige forbindelser.</li>
        <li><strong>Optimeret samarbejde:</strong> Kontordage kan koordineres til møder og samarbejdsprojekter.</li>
        <li><strong>Reducerede ejendomsomkostninger:</strong> Virksomheder kan nedskære kontorplads, mens de opretholder en fysisk tilstedeværelse.</li>
        <li><strong>Medarbejdertilfredshed:</strong> Mange arbejdere foretrækker balancen mellem fjernarbejde og kontorarbejde.</li>
        <li><strong>Inklusivitet:</strong> Imødekommer forskellige arbejdsstile og personlige omstændigheder.</li>
      </ul>
      
      <h3>Udfordringer ved hybrid arbejde</h3>
      <ul>
        <li><strong>Planlægningskompleksitet:</strong> Koordinering af, hvornår teams skal være på kontoret, kræver omhyggelig planlægning.</li>
        <li><strong>Potentiel ulighed:</strong> Risiko for at skabe en "to-lags" arbejdsstyrke mellem fjern- og kontormedarbejdere.</li>
        <li><strong>Teknologikrav:</strong> Behov for problemfri integration mellem kontor- og fjerndeltagere.</li>
        <li><strong>Kontorplads-redesign:</strong> Traditionelle kontorer kan have behov for rekonfiguration til hybride formål.</li>
        <li><strong>Ledelsesudfordringer:</strong> Supervisorer skal tilpasse sig at lede både personlige og fjernteammedlemmer.</li>
      </ul>
      
      <h2>Branchevariationer</h2>
      <p>Adoptionen af fjern- og hybride modeller varierer betydeligt på tværs af brancher:</p>
      <ul>
        <li><strong>Teknologi:</strong> Førende inden for adoption af fjernarbejde, med mange tech-virksomheder, der tilbyder permanente fjernmuligheder.</li>
        <li><strong>Finans:</strong> Indledningsvis modstandsdygtig, men i stigende grad adopterer hybride modeller med strukturerede kontorkrav.</li>
        <li><strong>Sundhedspleje:</strong> Patientvendte roller forbliver personlige, mens administrative funktioner i stigende grad flytter til hybride modeller.</li>
        <li><strong>Uddannelse:</strong> Udvikler hybride tilgange, der kombinerer personlige og online læringsoplevelser.</li>
        <li><strong>Produktion:</strong> Produktionsroller forbliver på stedet, mens støttefunktioner adopterer mere fleksible ordninger.</li>
      </ul>
      
      <h2>Den fremtidige udvikling</h2>
      <p>Når vi ser fremad, dukker flere tendenser op, der vil forme fremtidens arbejde:</p>
      
      <h3>1. Personlige arbejdsordninger</h3>
      <p>I stedet for one-size-fits-all-politikker tilbyder virksomheder i stigende grad personlige arbejdsordninger baseret på rollekrav, teamdynamik og individuelle præferencer. Denne tilpasning anerkender, at forskellige funktioner og personligheder kan trives i forskellige miljøer.</p>
      
      <h3>2. Resultatbaseret evaluering</h3>
      <p>Skiftet væk fra "tid i sædet" til resultatbaseret præstationsevaluering fortsætter med at accelerere. Virksomheder fokuserer mere på, hvad medarbejdere opnår, snarere end hvornår eller hvor de arbejder.</p>
      
      <h3>3. Teknologisk evolution</h3>
      <p>Fortsatte fremskridt inden for samarbejdsværktøjer, virtual reality og augmented reality vil gøre fjernsamarbejde stadig mere problemfrit. Virtuelle arbejdspladser kan i sidste ende replikere mange aspekter af personlig interaktion.</p>
      
      <h3>4. Asynkront arbejde</h3>
      <p>Ud over spørgsmålet om placering er der spørgsmålet om timing. Flere virksomheder omfavner asynkront arbejde, hvilket giver medarbejdere mulighed for at arbejde på tidspunkter, der passer til deres produktivitetsmønstre og livsomstændigheder.</p>
      
      <h3>5. "Tredje arbejdspladser"</h3>
      <p>Ud over den binære af hjem eller kontor ser vi fremkomsten af "tredje arbejdspladser" - coworking spaces, satellitkontorer eller andre steder, der tilbyder professionelle miljøer tættere på medarbejdernes hjem.</p>
      
      <h2>Implikationer for jobsøgende og arbejdsgivere</h2>
      
      <h3>For jobsøgende:</h3>
      <ul>
        <li>Fremhæv fjernarbejdsfærdigheder som selvmotivation, digital kommunikation og tidsstyring</li>
        <li>Undersøg virksomhedspolitikker om fjern- og hybrid arbejde før ansøgning</li>
        <li>Overvej geografisk fleksibilitet som en konkurrencemæssig fordel</li>
        <li>Invester i at skabe en effektiv hjemmekontor-opsætning</li>
        <li>Udvikl strategier for synlighed og karrierefremgang i fjernindstillinger</li>
      </ul>
      
      <h3>For arbejdsgivere:</h3>
      <ul>
        <li>Kommuniker klart arbejdsordningspolitikker i jobopslag</li>
        <li>Invester i teknologi, der understøtter problemfrit samarbejde</li>
        <li>Udvikl ledelsespraksiser egnet til distribuerede teams</li>
        <li>Skab bevidste muligheder for teambuilding og kulturudvikling</li>
        <li>Overvej arbejdsordninger som en del af det samlede medarbejderværdiforslag</li>
      </ul>
      
      <h2>Konklusion</h2>
      <p>Debatten mellem fjern- og hybride arbejdsmodeller bevæger sig ikke mod en enkelt universel løsning. I stedet ser vi en udvikling mod mere nuancerede, fleksible tilgange, der anerkender mangfoldigheden af arbejdskrav, organisatoriske behov og individuelle præferencer.</p>
      <p>Hvad der er klart, er, at den traditionelle kontorcentrerede model er permanent ændret. Organisationer, der gennemtænkt designer deres arbejdsordninger - med hensyn til produktivitet, samarbejde, medarbejdertrivsel og forretningskrav - vil have en betydelig fordel i at tiltrække og fastholde talent i fremtidens konkurrenceprægede landskab.</p>
      <p>Når vi bevæger os fremad, vil de mest succesfulde organisationer ikke være dem, der simpelthen vælger mellem fjern- eller hybride modeller, men dem, der skaber gennemtænkte, bevidste tilgange til arbejde, der udnytter fordelene ved fleksibilitet, mens de adresserer dens udfordringer.</p>
    `,
    author: 'Sofie Andersen',
    date: '2025-04-05',
    readTime: '8 min',
    category: 'Workplace Trends',
    categoryKey: 'workplaceTrends',
    image:
      'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1000',
  },
  {
    id: '4',
    title: 'Mastering the Virtual Interview: Expert Advice',
    titleDa: 'Behersk det virtuelle interview: Ekspertråd',
    excerpt:
      'Practical tips and strategies to help you succeed in online interviews and video assessments.',
    excerptDa:
      'Praktiske tips og strategier til at hjælpe dig med at få succes i online interviews og videovurderinger.',
    content: `<p>Coming soon...</p>`,
    contentDa: `<p>Kommer snart...</p>`,
    author: 'Lars Petersen',
    date: '2025-03-28',
    readTime: '6 min',
    category: 'Interview Tips',
    categoryKey: 'interviewTips',
    image:
      'https://images.unsplash.com/photo-1516387938699-a93567ec168e?q=80&w=1000',
  },
  {
    id: '5',
    title: 'How to Showcase Soft Skills on Your Resume',
    titleDa: 'Sådan fremviser du bløde kompetencer på dit CV',
    excerpt:
      'Learn effective ways to highlight your interpersonal abilities and stand out to potential employers.',
    excerptDa:
      'Lær effektive måder at fremhæve dine interpersonelle evner og skille dig ud for potentielle arbejdsgivere.',
    content: `<p>Coming soon...</p>`,
    contentDa: `<p>Kommer snart...</p>`,
    author: 'Emma Schmidt',
    date: '2025-03-20',
    readTime: '5 min',
    category: 'Resume Tips',
    categoryKey: 'resumeTips',
    image:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000',
  },
  {
    id: '6',
    title: 'Navigating Career Changes in a Digital Economy',
    titleDa: 'Navigering af karriereændringer i en digital økonomi',
    excerpt:
      "Strategies for successfully transitioning to a new career path in today's rapidly evolving job market.",
    excerptDa:
      'Strategier til succesfuld overgang til en ny karrierevej i dagens hurtigt udviklende jobmarked.',
    content: `<p>Coming soon...</p>`,
    contentDa: `<p>Kommer snart...</p>`,
    author: 'Mikkel Hansen',
    date: '2025-03-15',
    readTime: '9 min',
    category: 'Career Advice',
    categoryKey: 'careerAdvice',
    image:
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1000',
  },
];

// Related posts function
const getRelatedPosts = (currentPostId: string, categoryKey: string) => {
  return blogPosts
    .filter(
      (post) => post.id !== currentPostId && post.categoryKey === categoryKey
    )
    .slice(0, 3);
};

// Format date to be more readable
const formatDate = (dateString: string, language: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString(language === 'da' ? 'da-DK' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

// Get the translated category name for a post
const getTranslatedCategory = (categoryKey: string, t: any) => {
  switch (categoryKey) {
    case 'aiTechnology':
      return t.blog.categories.aiTechnology;
    case 'resumeTips':
      return t.blog.categories.resumeTips;
    case 'interviewTips':
      return t.blog.categories.interviewTips;
    case 'careerAdvice':
      return t.blog.categories.careerAdvice;
    case 'workplaceTrends':
      return t.blog.categories.workplaceTrends;
    default:
      return categoryKey;
  }
};

export default function BlogPostPage() {
  const { t, language } = useLanguage();
  const params = useParams();
  const router = useRouter();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    if (params.id) {
      const postId = Array.isArray(params.id) ? params.id[0] : params.id;
      const foundPost = blogPosts.find((p) => p.id === postId);

      if (foundPost) {
        // Apply translations to the post
        const translatedPost = {
          ...foundPost,
          title:
            language === 'da' && foundPost.titleDa
              ? foundPost.titleDa
              : foundPost.title,
          excerpt:
            language === 'da' && foundPost.excerptDa
              ? foundPost.excerptDa
              : foundPost.excerpt,
          content:
            language === 'da' && foundPost.contentDa
              ? foundPost.contentDa
              : foundPost.content,
          category: getTranslatedCategory(foundPost.categoryKey, t),
        };

        setPost(translatedPost);

        // Get related posts and apply translations
        const related = getRelatedPosts(postId, foundPost.categoryKey).map(
          (relatedPost) => ({
            ...relatedPost,
            title:
              language === 'da' && relatedPost.titleDa
                ? relatedPost.titleDa
                : relatedPost.title,
            excerpt:
              language === 'da' && relatedPost.excerptDa
                ? relatedPost.excerptDa
                : relatedPost.excerpt,
            category: getTranslatedCategory(relatedPost.categoryKey, t),
          })
        );

        setRelatedPosts(related);
      } else {
        // Redirect to blog main page if post not found
        router.push('/blog');
      }
    }
  }, [params.id, router, language, t]);

  if (!post) {
    return (
      <div className="min-h-[calc(100vh-8rem)] flex items-center justify-center">
        <p
          className="text-base sm:text-xl text-muted-foreground"
          aria-live="polite"
        >
          {t.blog.posts.loadingArticle}
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary/5 py-16" aria-labelledby="article-title">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <Link href="/blog" className="self-start mb-6">
              <Button variant="ghost" size="sm" className="gap-2">
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                {t.blog.backToBlog}
              </Button>
            </Link>

            <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
              {post.category}
            </Badge>

            <h1
              id="article-title"
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
            >
              {post.title}
            </h1>

            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" aria-hidden="true" />
                <span>{formatDate(post.date, language)}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" aria-hidden="true" />
                <span>{post.readTime} read</span>
              </div>
              <div className="flex items-center">
                <User className="h-4 w-4 mr-1" aria-hidden="true" />
                <span>{post.author}</span>
              </div>
            </div>

            <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden mb-8">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 800px"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section
        className="py-12 bg-background"
        aria-labelledby="article-content"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-end gap-3 mb-8">
            <Button variant="outline" size="sm" className="gap-2">
              <Share2 className="h-4 w-4" aria-hidden="true" />
              {t.blog.share}
            </Button>
            <Button variant="outline" size="sm" className="gap-2">
              <Bookmark className="h-4 w-4" aria-hidden="true" />
              {t.blog.save}
            </Button>
          </div>

          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
            aria-labelledby="article-content"
          />

          <div className="mt-12 pt-8 border-t flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="gap-2">
                <ThumbsUp className="h-4 w-4" aria-hidden="true" />
                {t.blog.helpful}
              </Button>
              <span className="text-sm text-muted-foreground">
                42 {t.blog.peopleFoundHelpful}
              </span>
            </div>
            <Button variant="outline" size="sm" className="gap-2">
              <Share2 className="h-4 w-4" aria-hidden="true" />
              {t.blog.share}
            </Button>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <section
          className="py-12 bg-primary/5"
          aria-labelledby="related-articles-heading"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              id="related-articles-heading"
              className="text-2xl font-bold mb-8"
            >
              {t.blog.relatedArticles}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Card key={relatedPost.id} className="h-full flex flex-col">
                  <div className="relative h-48 w-full">
                    <Image
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      fill
                      className="object-cover rounded-t-lg"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 300px"
                    />
                  </div>
                  <CardHeader className="flex-grow">
                    <div className="flex justify-between items-center mb-2">
                      <Badge className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                        {relatedPost.category}
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        {formatDate(relatedPost.date, language)}
                      </span>
                    </div>
                    <CardTitle className="text-xl">
                      {relatedPost.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-2">
                      {relatedPost.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" aria-hidden="true" />
                        <span>{relatedPost.readTime} read</span>
                      </div>
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" aria-hidden="true" />
                        <span>{relatedPost.author}</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link href={`/blog/${relatedPost.id}`} className="w-full">
                      <Button variant="outline" className="w-full">
                        {t.blog.readArticle}
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
