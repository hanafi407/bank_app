import { formatAmount } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const BankCard = ({
  account,
  userName,
  showBalance = true,
}: CreditCardProps) => {
  return (
    <div className='flex flex-col'>
      <div className='bank-card'>
        <div className='bank-card_content'>
          <div>
            <h1 className='text-16 text-white font-semibold '>
              {account.name || userName}
            </h1>
            <p className='font-black text-white font-ibm-plex-serif '>
              {formatAmount(account.currentBalance)}
            </p>
          </div>
          <div className='flex flex-col gap-2'>
            <div className='flex justify-between'>
              <h1 className='text-12 font-semibold text-white'>{userName}</h1>
              <h2 className='text-12 font-semibold text-white'>** / **</h2>
            </div>
            <p className='text-white font-semibold text-14 tracking-[1.1px]   '>
              **** **** **** <span className='text-16'>1234</span>
            </p>
          </div>
        </div>

        <div className="bank-card_icon">
          <Image
          src={'/icons/Paypass.svg'} 
          width={20}
          height={24}
          alt='pay pass'
          />

          <Image
          src={'/icons/mastercard.svg'}
          width={45}
          height={32}
          alt="mastercard"
          />

          <Image
          src={'/icons/lines.png'}
          width={316}
          height={140}
          alt="lines"
          className="absolute top-0 left-0"
          />
        </div>
      </div>
    </div>
  );
};

export default BankCard;
