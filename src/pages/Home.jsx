import React from 'react'
import food1 from '../assets/food 1.png'
import petBowl from '../assets/pet-bowl 1.png'
import petFood from '../assets/pet-food 1.png'
import vet from '../assets/vet 1.png'
import shield from '../assets/shield-check.png'
import bowl from '../assets/Frame 1171276495.png'
import apay from '../assets/Apay.png'
import gpay from '../assets/Gpay.png'
import masterCard from '../assets/master-card.png'
import visa from '../assets/visa.png'
import dogDisplay from '../assets/Rectangle 15.png'
import dogEating from '../assets/Rectangle 8.png'
import dogFood from '../assets/Rectangle 7.png'
import paypal from '../assets/paypal.png'


export const Home = () => {
  return (
    <div>
      <section className='flex flex-col items-center gap-[30px]'>
        <h1 className='w-[536px] h-24 font-inter-tight font-semibold text-[40px] text-center text-[#161723] my-10 tracking[0.25px] leading-[120%]'>What makes us different makes them stronger</h1>

        <main className='flex flex-row gap-[30px] items-center'>
          <div className='w-[370px] h-[250px] flex flex-col gap-20'>
            <div className='flex flex-row w-[370px] h-[85px] gap-6'>
              <img src={food1} alt="" className='w-[60px] h-[60px]'/>
              <div className='w-[286px] h=[85px] flex flex-col gap-2'>
                <h1 className='text-[#161723] font-inter-tight font-semibold text-[19px] leading-[150%] tracking-[0.5px]'>Real Food</h1>
                <p className='font-inter-tight text-[#424153] text-[16px] leading-[150%] tracking-[0.5px] w-[286px] h-12'>Wholesome recipies for dogs with real meat and veggies.</p>
              </div>
            </div>

             <div className='flex flex-row w-[370px] h-[85px] gap-6'>
              <img src={petBowl} alt="" className='w-[60px] h-[60px]'/>
              <div className='w-[286px] h=[85px] flex flex-col gap-2'>
                <h1 className='text-[#161723] font-inter-tight font-semibold text-[19px] leading-[150%] tracking-[0.5px]'>Premium Ingredient</h1>
                <p className='font-inter-tight text-[#424153] text-[16px] leading-[150%] tracking-[0.5px] w-[286px] h-12'>Elevating pet care with unmatched safety and quality.</p>
              </div>
            </div>
          </div>

          <div>
            <img src={bowl} alt="" />
          </div>

          <div>
            <div className='w-[370px] h-[250px] flex flex-col gap-20'>
            <div className='flex flex-row w-[370px] h-[85px] gap-6'>
              <img src={petFood} alt="" className='w-[60px] h-[60px]'/>
              <div className='w-[286px] h=[85px] flex flex-col gap-2'>
                <h1 className='text-[#161723] font-inter-tight font-semibold text-[19px] leading-[150%] tracking-[0.5px]'>Made Fresh</h1>
                <p className='font-inter-tight text-[#424153] text-[16px] leading-[150%] tracking-[0.5px] w-[286px] h-12'>We prioritize maintaining the integrity of whole foods and nutrition.</p>
              </div>
            </div>

             <div className='flex flex-row w-[370px] h-[85px] gap-6'>
              <img src={vet} alt="" className='w-[60px] h-[60px]'/>
              <div className='w-[286px] h=[85px] flex flex-col gap-2'>
                <h1 className='text-[#161723] font-inter-tight font-semibold text-[19px] leading-[150%] tracking-[0.5px]'>Vet Developed</h1>
                <p className='font-inter-tight text-[#424153] text-[16px] leading-[150%] tracking-[0.5px] w-[286px] h-12'>We raise the bar for dog nutrition, surpassing industry expectations.</p>
              </div>
            </div>
            </div>
          </div>
        </main>

        <div className='w-[480px] h-[88px] flex flex-col items-center gap-4 mt-5 mb-23'> 
          <button className='w-[462px] h-12 rounded-md py-3 px-10 bg-[#EE6F4B] font-inter-tight font-semibold text-[16px] leading-[150%] tracking-[0.5px] text-[#FFFFFF] cursor-pointer'>Get your dog's healthy meal today!</button>

          <div className='flex flex-row items-center gap-6'>
            <div className='flex flex-row gap-2 items-center'>
              <img src={shield} alt="" className='w-4 h-4'/>
              <p className='font-inter-tight text-[13px] leading-[150%] tracking-[0.5px] text-[#424153]'>30-day money back guarantee</p>
            </div>

             <div className='flex flex-row gap-1 items-center'>
              <img src={paypal} alt="" className='w-[39.2px] h-6'/>
              <img src={visa} alt="" className='w-[39.2px] h-6' />
              <img src={masterCard} alt="" className='w-[39.2px] h-6' />
              <img src={apay} alt="" className='w-[39.2px] h-6' />
              <img src={gpay} alt="" className='w-[39.2px] h-6'/>
             </div>
          </div>
        </div>
      </section>

      <section className='flex flex-row items-center justify-center gap-[30px] pt-20 pb-20 bg-[#F8F8F8] h-[731px]'>
        <div className='w-[620px] h-[571px] flex flex-col gap-12 pr-8'>
          <div className='flex flex-col gap-4'> 
            <h1 className='font-inter-tight font-semibold text-[40px] leading-[120%] tracking-[0.25px] text-[#161723]'>Nutrition is the foundation for longer, healthier lives in dogs.</h1>
            <p className='font-inter-tight text-[16px] leading-[150%] tracking-[0.5px] text-[#424153]'>Invest in your dog's future with our scientifically formulated superfood-powered supplements. Give them the nutrition they deserve and watch them thrive with vitality, energy, and the joy of a longer, healthier life.</p>
          </div>

          <div className='flex flex-col gap-4 w-[538px] h-[243px]'>
            <h1 className='font-inter-tight font-semibold text-[19px] leading-[150%] tracking-[0.5px] text-[#161723]'>Key Points:</h1>

            <div className='flex flex-col gap-3'>
              <div className='flex gap-12'>
                <h1 className='font-inter-tight font-bold text-[33px] leading-[150%] tracking-[0.25px] text-[#EE6F4B]'>97%</h1>
                <p className='font-inter-tight text-[16px] leading-[150%] tracking-[0.5px] text-[#424153]'>Dogs choose our dog food over leading brands because of its real functional ingredients and delicious flavor.</p>
              </div>
              <hr className='w-[538px] h-0 border text-[#E3E3E8] ' />
              <div className='flex gap-12'>
                <h1 className='font-inter-tight font-bold text-[33px] leading-[150%] tracking-[0.25px] text-[#EE6F4B]'>84%</h1>
                <p className='font-inter-tight text-[16px] leading-[150%] tracking-[0.5px] text-[#424153]'>Our dog food provides superior nutrition and a patented probiotic for optimal nutrient absorption.</p>
              </div>
              <hr className='w-[538px] h-0 border text-[#E3E3E8] ' />
              <div className='flex gap-12'>
                <h1 className='font-inter-tight font-bold text-[33px] leading-[150%] tracking-[0.25px] text-[#EE6F4B]'>92%</h1>
                <p className='font-inter-tight text-[16px] leading-[150%] tracking-[0.5px] text-[#424153]'>Our dog food's high protein and fat digestibility contribute to ideal stool quality.</p>
              </div>
            </div>
          </div>

          <button className='w-[538px] h-12 rounded-md py-3 px-10 bg-[#EE6F4B] font-inter-tight font-semibold text-[16px] leading-[150%] tracking-[0.5px] text-[#FFFFFF] cursor-pointer'>Give your furry friend the gift of wholesome nutrition.</button>

        </div>

        <img src={dogDisplay} alt="" className='w-[570px] h-[570px]' />
      </section>

      <section className='flex flex-col items-center justify-center gap-20 py-20'>
        <div className='flex items-center gap-[30px] w-[1170px] h-[480px]'>
          <img src={dogEating} alt="" className='w-[570px] h-[480px]'/>

          <div className='flex flex-col items-center gap-4 w-[570px] h-[280px] pl-8'>
            <h1 className='font-inter-tight font-semibold text-[40px] leading-[120%] tracking-[0.25px] text-[#161723]'>Improve overall gastrointestinal health for better nutrient absorption</h1>
            <p className='font-inter-tight font-normal text-[16px] leading-[150%] tracking-[0.5px] text-[#424153] h-[120px]'>
              Through rigorous scientific studies and consultations with veterinarians, we have created a breakthrough formula exclusively tailored to combat the health challenges prevalent in dogs. A staggering 91% of our customers have reported significant improvements in their dogs' health after incorporating our product into their diet.
            </p>
          </div>
        </div>

         <div className='flex items-center gap-[30px] w-[1170px] h-[480px]'>
        
          <div className='flex flex-col items-center gap-4 w-[570px] h-[280px] pl-8'>
            <h1 className='font-inter-tight font-semibold text-[40px] leading-[120%] tracking-[0.25px] text-[#161723]'>Prebiotics nourish the beneficial gut bacteria, supporting digestive health</h1>
            <p className='font-inter-tight font-normal text-[16px] leading-[150%] tracking-[0.5px] text-[#424153] h-[120px]'>
              Our dog food formula contains carefully selected prebiotics that work in harmony with the gut microbiota, providing the necessary nutrients for the growth and maintenance of beneficial bacteria, ultimately supporting digestive health.
            </p>
          </div>

          <img src={dogFood} alt="" className='w-[570px] h-[480px]'/>
        </div>

      </section>
    </div>
  )
}
