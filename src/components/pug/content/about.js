import React from 'react';
import AboutImage from '../../../../assets/images/about_banner.jpg';

const About = () => pug`
  h1 About
  p CCP’s first Call for Scores invites university composers from New York City to submit new works for chamber ensemble to be premiered in concert in Spring 2020. Composers will receive personalized feedback on their composition from professional composers and experience a realistic rehearsal timeline for the premiere. 

  h2 Eligibility
  p CCP’s Call for Scores is open to college and university students of any age studying in New York City. Applicants may be pursuing any area of study.

  h2 Benefits
  h3 All applicants will:
  p Receive personalized feedback on their composition

  h3 Composers whose work is selected will:
  ul 
    li Have their work premiered in concert at Columbia University
    li Give an introduction to their work at the concert
    li Be provided an ensemble to premiere their work (if needed)
    li Attend a masterclass led by professional composer(s) to refine their work
    li Work directly with the ensemble to prepare their work
    li Receive an audio and video recording of their work
    li Be featured on CCP’s website and social media

  h2 Requirements and permitted orchestration
  ul
    li CCP’s Call for Scores only accepts works for chamber ensemble. Submitted works for groups larger than a sextet will not be considered. 
    li CCP strongly suggests applicants submit works for standard chamber combinations (e.g. string quartet, piano trio, etc.). 
    li We strongly suggest you find an ensemble yourself to help premiere the work. CCP can help find members of an ensemble if you have difficulty doing so.
    li Works longer than 15 minutes will not be considered.
    li Works requiring electronics or digital technology will not be considered.

  h2 Privacy guarantee
  p CCP guarantees the privacy of each submission. CCP will not copy, distribute, or in any way use the composer’s work(s) without the composer’s explicit permission.
`;

export default About;