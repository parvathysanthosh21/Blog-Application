import React from 'react'
import { Link } from 'react-router-dom'

function BlogsView() {
  return (
    <div style={{marginTop:'100px'}}>
      <div className='d-flex text-dark mt-5 ms-2'>
    <button style={{backgroundColor:'black'}} className='p-1 ms-5 text-light'>Morgan meaker</button>
    {/* <div className="text-center mt-5 mb-5"> <Link className='text-dark fs-5' to={'/allblogs'}>View More News</Link></div> */}

    <h6 className='ms-3 mt-2 fw-bolder'>Category</h6>
    <h6 className='ms-3 mt-2 fw-bolder'>Date and Time</h6>
      </div>
      <div className='ms-5 mt-5 me-5'>
        <h1 className=' fw-bolder'>Wagner Mutiny Puts Russia’s Military Bloggers on a Razor’s Edge</h1>
        <h4>Telegram “war correspondents” have promoted the Kremlin’s invasion of Ukraine, but many have also supported mercenaries who launched a failed coup.</h4>
      </div>
      <div  className='ms-5 mt-5 me-5'>
        <img style={{width:'70%'}} className='d-flex justify-content-center align-items-center' src="https://images.moneycontrol.com/static-mcnews/2023/05/financial_services4-2-770x433.jpg" alt="" />
        <p className='mt-5' style={{textAlign:'justify',fontSize:'18px',lineHeight:'30px',width:'75%'}}>THE MOURNERS CARRIED armfuls of red roses. There was a military gun salute. Hundreds of people crowded to watch the coffin be lowered into the ground. This wasn’t the funeral of a celebrity or a government official. This was the send-off for Vladlen Tatarsky, a Russian nationalist Telegram blogger who was killed in April in a mysterious bomb blast in a St. Petersburg café.


Tatarsky’s funeral was emblematic of the influence that Russia’s nationalist bloggers have accrued during the war in Ukraine. Known as the voenkory, or military correspondents, they have stepped in to fill the information vacuum left by the government around what’s actually happening on the front lines. Many have accumulated giant followings, overseeing teams of people posting footage of the war. Pro-Russian Ukrainian blogger Yuri Podolyaka’s Telegram channel has 2.8 million followers. Former TV journalist Semyon Pegov, who posts as WarGonzo, has 1.3 million. Rybar, an account run by a former military Arabic translator named Mikhail Zvinchuk, has 1.2 million.

That influence means many people in Russia turned to Telegram when Yevgeny Prigozhin, longtime Putin ally and chief of mercenary group Wagner, launched an abortive march on Moscow on June 23 in a challenge to Russia's defense minister Sergei Shiogu. But instead of receiving their usual stream of updates, the pro-war group of Telegram bloggers havered.
<br />
“The reaction across the war blogger community was very, very cautious,” says Eto Buziashvili, a research associate at the Atlantic Council's Digital Forensic Research Lab. “They were searching for a side to take that would be beneficial for them.”

The relationship between the voenkory and the Kremlin has long been messy. Different nationalist bloggers have different affiliations. Some are aligned to the Kremlin, others to Wagner. There is a faction of military veterans, represented by figures like Igor Girkin, allegedly a former commander of Russian-backed separatist forces during the annexation of Crimea in 2014, who now has 800,000 subscribers on Telegram. But they are all pro-war nationalists, often campaigning for an escalation in violence. Like Wagner chief Prigozhin, who was among the mourners at Tatarsky’s funeral, many have also issued sharp criticisms of how the full-scale invasion of Ukraine has been managed—blaming the incompetence of the military leadership for poor performance on the battlefield. Prigozhin blamed defense minister Shoigu for the death of his troops; Girkin refers to him with the nickname the “cardboard marshal.”</p>
      </div>
    </div>
  )
}

export default BlogsView