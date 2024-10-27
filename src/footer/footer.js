export default function Footer() {
    return (<footer class="relative bg-blueGray-200 pt-2 bg-white shadow-2xl">
        <div class="container mx-auto max-w-[1200px] px-auto">
            <footer class="p-4 rounded-lg sm:flex sm:items-center sm:justify-between sm:p-6 ">
            <h4 class="fonat-semibold text-blueGray-700 font-bold text-3xl cursor-pointer flex items-center max-md:w-[40%] font-[Poppins] text-gray-800;">
            <ion-icon name="logo-ionic"></ion-icon><span>
                        </span> RUFS
                    </h4>
                <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com" class="hover:underline" target="_blank">Flowbite™</a>. All Rights Reserved.
                </span>
                <ul class="flex flex-wrap items-center mt-3 sm:mt-0">
                    <div class="mt-6 lg:mb-0 mb-6 md:mt-0">
                        <button class="bg-white text-green-500 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                            <i class="fab fa-whatsapp"></i></button><button class="bg-white text-pink-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                            <i class="fab fa-instagram"></i></button><button class="bg-white text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                            <i class="fab fa-facebook-square "></i></button><button class="bg-white text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                            <i class="fab fa-linkedin"></i>
                        </button>
                    </div>
                </ul>
            </footer>


        </div>
    </footer>

    )
}