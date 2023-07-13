export function Header() {
    return (
       <header className="mb-[314px]">
        <div className=" h-20  flex items-center justify-center">
            <ul className="flex items-center">
                <div className="flex mr-[203px]">
                    <a className="flex items-center" href="#">
                    <svg width="49" height="38" viewBox="0 0 49 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.9002 29.8056L24.5002 0L44.1002 29.8056H4.9002ZM18.0075 24.0611L24.4091 13.1841L30.8108 24.0611H18.0075Z" fill="url(#paint0_linear_313_6)"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M49 37.513L24.5 0L0 37.513H49ZM34.7894 29.2756L24.614 14.697L14.4386 29.2756H34.7894Z" fill="url(#paint1_linear_313_6)"/>
                    <defs>
                    <linearGradient id="paint0_linear_313_6" x1="32.8047" y1="9.98228" x2="1.29181" y2="29.9805" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#6233C6"/>
                    <stop offset="1" stop-color="#76EFFF"/>
                    </linearGradient>
                    <linearGradient id="paint1_linear_313_6" x1="14.1193" y1="12.5636" x2="53.6649" y2="37.4881" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#A27AFA"/>
                    <stop offset="1" stop-color="#76EFFF"/>
                    </linearGradient>
                    </defs>
                    </svg>
                    <p href="#" className="text-white text-[30px] un font-medium">AmexDev</p>
                    </a>
                </div>
                <div className="flex text-white text-[30px] font-medium items-cente visible max-2xl:invisible">
                <li className="mr-[104px] un"><a href="#">Projects</a></li>
                <li className="mr-[101px] un"><a href="#">Technologies</a></li>
                
                <li className="mr-[336px] un whitespace-nowrap"><a href="#">About me</a></li>

                </div>
                <div className="flex text-white">
                    <li className="mr-[34px] un"><a className="" href="#"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M16 1C7.52829 1 0.666626 7.86167 0.666626 16.3333C0.666626 23.1183 5.05579 28.8492 11.1508 30.8808C11.9175 31.015 12.205 30.555 12.205 30.1525C12.205 29.7883 12.1858 28.5808 12.1858 27.2967C8.33329 28.0058 7.33663 26.3575 7.02996 25.495C6.85746 25.0542 6.10996 23.6933 5.45829 23.3292C4.92163 23.0417 4.15496 22.3325 5.43913 22.3133C6.64663 22.2942 7.50913 23.425 7.79663 23.885C9.17663 26.2042 11.3808 25.5525 12.2625 25.15C12.3966 24.1533 12.7991 23.4825 13.24 23.0992C9.82829 22.7158 6.26329 21.3933 6.26329 15.5283C6.26329 13.8608 6.85746 12.4808 7.83496 11.4075C7.68163 11.0242 7.14496 9.4525 7.98829 7.34417C7.98829 7.34417 9.27246 6.94167 12.205 8.91583C13.4316 8.57083 14.735 8.39833 16.0383 8.39833C17.3416 8.39833 18.645 8.57083 19.8716 8.91583C22.8041 6.9225 24.0883 7.34417 24.0883 7.34417C24.9316 9.4525 24.395 11.0242 24.2416 11.4075C25.2191 12.4808 25.8133 13.8417 25.8133 15.5283C25.8133 21.4125 22.2291 22.7158 18.8175 23.0992C19.3733 23.5783 19.8525 24.4983 19.8525 25.9358C19.8525 27.9867 19.8333 29.635 19.8333 30.1525C19.8333 30.555 20.1208 31.0342 20.8875 30.8808C26.9441 28.8492 31.3333 23.0992 31.3333 16.3333C31.3333 7.86167 24.4716 1 16 1Z" fill="white"/></svg></a></li>
                    <li className="mr-[34px] un"><a href="#"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="32" height="32" rx="3" fill="white"/><path d="M6.33333 2.5C4.76853 2.5 3.5 3.76853 3.5 5.33333C3.5 6.89814 4.76853 8.16667 6.33333 8.16667C7.89814 8.16667 9.16667 6.89814 9.16667 5.33333C9.16667 3.76853 7.89814 2.5 6.33333 2.5Z" fill="black"/><path d="M3.66667 10.5C3.57462 10.5 3.5 10.5746 3.5 10.6667V28C3.5 28.092 3.57462 28.1667 3.66667 28.1667H9C9.09205 28.1667 9.16667 28.092 9.16667 28V10.6667C9.16667 10.5746 9.09205 10.5 9 10.5H3.66667Z" fill="black"/><path d="M12.3333 10.5C12.2413 10.5 12.1667 10.5746 12.1667 10.6667V28C12.1667 28.092 12.2413 28.1667 12.3333 28.1667H17.6667C17.7587 28.1667 17.8333 28.092 17.8333 28V18.6667C17.8333 18.0036 18.0967 17.3677 18.5656 16.8989C19.0344 16.4301 19.6703 16.1667 20.3333 16.1667C20.9964 16.1667 21.6323 16.4301 22.1011 16.8989C22.5699 17.3677 22.8333 18.0036 22.8333 18.6667V28C22.8333 28.092 22.908 28.1667 23 28.1667H28.3333C28.4254 28.1667 28.5 28.092 28.5 28V16.507C28.5 13.2713 25.6859 10.74 22.4665 11.0327C21.4736 11.1229 20.4919 11.3697 19.5753 11.7626L17.8333 12.5091V10.6667C17.8333 10.5746 17.7587 10.5 17.6667 10.5H12.3333Z" fill="black"/></svg></a></li>
                    <li className="un"><a href="#"><svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.4675 4.26955C9.13365 3.60341 10.0371 3.22917 10.9792 3.22917H14.5313V10.3333H10.9792C10.0371 10.3333 9.13365 9.9591 8.4675 9.29295C7.80136 8.62681 7.42712 7.72332 7.42712 6.78125C7.42712 5.83918 7.80136 4.9357 8.4675 4.26955Z" fill="white"/><path d="M20.0209 10.3333H16.4688V3.22917H20.0209C20.4873 3.22917 20.9492 3.32105 21.3802 3.49956C21.8112 3.67807 22.2027 3.93971 22.5326 4.26955C22.8624 4.59939 23.1241 4.99097 23.3026 5.42193C23.4811 5.85289 23.573 6.31479 23.573 6.78125C23.573 7.24772 23.4811 7.70961 23.3026 8.14057C23.1241 8.57153 22.8624 8.96311 22.5326 9.29295C22.2027 9.62279 21.8112 9.88444 21.3802 10.0629C20.9492 10.2415 20.4873 10.3333 20.0209 10.3333Z" fill="white"/><path d="M20.0209 12.2708C19.5544 12.2708 19.0925 12.3627 18.6615 12.5412C18.2306 12.7197 17.839 12.9814 17.5092 13.3112C17.1793 13.6411 16.9177 14.0326 16.7392 14.4636C16.5607 14.8946 16.4688 15.3565 16.4688 15.8229C16.4688 16.2894 16.5607 16.7513 16.7392 17.1822C16.9177 17.6132 17.1793 18.0048 17.5092 18.3346C17.839 18.6645 18.2306 18.9261 18.6615 19.1046C19.0925 19.2831 19.5544 19.375 20.0209 19.375C20.4873 19.375 20.9492 19.2831 21.3802 19.1046C21.8112 18.9261 22.2027 18.6645 22.5326 18.3346C22.8624 18.0048 23.1241 17.6132 23.3026 17.1822C23.4811 16.7513 23.573 16.2894 23.573 15.8229C23.573 15.3565 23.4811 14.8946 23.3026 14.4636C23.1241 14.0326 22.8624 13.6411 22.5326 13.3112C22.2027 12.9814 21.8112 12.7197 21.3802 12.5412C20.9492 12.3627 20.4873 12.2708 20.0209 12.2708Z" fill="white"/><path d="M8.4675 22.3529C9.13365 21.6867 10.0371 21.3125 10.9792 21.3125H14.5313V24.8646C14.5313 25.8067 14.157 26.7101 13.4909 27.3763C12.8248 28.0424 11.9213 28.4167 10.9792 28.4167C10.0371 28.4167 9.13365 28.0424 8.4675 27.3763C7.80136 26.7101 7.42712 25.8067 7.42712 24.8646C7.42712 23.9225 7.80136 23.019 8.4675 22.3529Z" fill="white"/><path d="M10.9792 12.2708C10.0371 12.2708 9.13365 12.6451 8.4675 13.3112C7.80136 13.9774 7.42712 14.8808 7.42712 15.8229C7.42712 16.765 7.80136 17.6685 8.4675 18.3346C9.13365 19.0008 10.0371 19.375 10.9792 19.375H14.5313V12.2708H10.9792Z" fill="white"/></svg></a></li>  
                </div>
            </ul>
        </div>

       </header>
    )
}