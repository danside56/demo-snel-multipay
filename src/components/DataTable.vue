<script setup>
import {ref} from 'vue'
import Modal from '@/components/Modal.vue';
import AbonneCardInfo from '@/components/AbonneCardInfo.vue';
import ModalPay from '@/components/ModalPay.vue';

const open = ref(false)
const visible = ref(false)
const handleCLick = ()=>{
    open.value = true
    console.log(open.value)
}
const closeAndOpen = ()=>{
    open.value = false
    visible.value = true
}
</script>
<template>
    <div>

        <AbonneCardInfo/>
        <Modal v-if="open" @increment="open=false"  @next_modal="closeAndOpen"/>
        <ModalPay v-if="visible" @close_modal="visible=false"/>
        <div class="sm:px-6 w-full">

            <div class="bg-white py-4 md:py-7 px-4 md:px-8 xl:px-10">
                <div class="sm:flex items-center justify-between">
                    <div class="flex items-center">
                        <a class="rounded-full focus:outline-none focus:ring-2  focus:bg-indigo-50 focus:ring-indigo-800"
                            href=" javascript:void(0)">
                            <div class="py-2 px-8 bg-indigo-100 text-indigo-700 rounded-full">
                                <p>All</p>
                            </div>
                        </a>
                        <a class="rounded-full focus:outline-none focus:ring-2 focus:bg-indigo-50 focus:ring-indigo-800 ml-4 sm:ml-8"
                            href="javascript:void(0)">
                            <div class="py-2 px-8 text-gray-600 hover:text-indigo-700 hover:bg-indigo-100 rounded-full ">
                                <p>Done</p>
                            </div>
                        </a>
                        <a class="rounded-full focus:outline-none focus:ring-2 focus:bg-indigo-50 focus:ring-indigo-800 ml-4 sm:ml-8"
                            href="javascript:void(0)">
                            <div class="py-2 px-8 text-gray-600 hover:text-indigo-700 hover:bg-indigo-100 rounded-full ">
                                <p>Pending</p>
                            </div>
                        </a>
                    </div>
                    <button @click="handleCLick"
                        class="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 mt-4 sm:mt-0 inline-flex items-start justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded">
                        <p class="text-sm font-medium leading-none text-white">Votre facture vaut : 15.000 FC</p>
                    </button>
                </div>
                <div class="mt-7 overflow-x-auto">
                    <table class="w-full whitespace-nowrap">
                        <tbody>
                            <tr tabindex="0" class="focus:outline-none h-16 border border-gray-100 rounded">
                                <td>
                                    <div class="ml-5">
                                        <div
                                            class="bg-gray-200 rounded-sm w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                                            <input placeholder="checkbox" type="checkbox"
                                                class="focus:opacity-100 disabled:bg-red-700 checkbox opacity-0 absolute cursor-pointer w-full h-full" disabled/>
                                            <div class="check-icon hidden bg-indigo-700 text-white rounded-sm">
                                                <svg class="icon icon-tabler icon-tabler-check"
                                                    xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                    viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
                                                    stroke-linecap="round" stroke-linejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z"></path>
                                                    <path d="M5 12l5 5l10 -10"></path>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td class="">
                                    <div class="flex items-center pl-5">
                                        <p class="text-base font-medium leading-none text-gray-700 mr-2">C000001342623</p>
                                    </div>
                                </td>
                                <td class="pl-24">
                                    <div class="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                            fill="none">
                                            <path
                                                d="M9.16667 2.5L16.6667 10C17.0911 10.4745 17.0911 11.1922 16.6667 11.6667L11.6667 16.6667C11.1922 17.0911 10.4745 17.0911 10 16.6667L2.5 9.16667V5.83333C2.5 3.99238 3.99238 2.5 5.83333 2.5H9.16667"
                                                stroke="#52525B" stroke-width="1.25" stroke-linecap="round"
                                                stroke-linejoin="round"></path>
                                            <circle cx="7.50004" cy="7.49967" r="1.66667" stroke="#52525B"
                                                stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></circle>
                                        </svg>
                                        <p class="text-sm leading-none text-gray-600 ml-2">Urgent</p>
                                    </div>
                                </td>
                                <td class="pl-5">
                                    <div class="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                            fill="none">
                                            <path d="M7.5 5H16.6667" stroke="#52525B" stroke-width="1.25"
                                                stroke-linecap="round" stroke-linejoin="round"></path>
                                            <path d="M7.5 10H16.6667" stroke="#52525B" stroke-width="1.25"
                                                stroke-linecap="round" stroke-linejoin="round"></path>
                                            <path d="M7.5 15H16.6667" stroke="#52525B" stroke-width="1.25"
                                                stroke-linecap="round" stroke-linejoin="round"></path>
                                            <path d="M4.16669 5V5.00667" stroke="#52525B" stroke-width="1.25"
                                                stroke-linecap="round" stroke-linejoin="round"></path>
                                            <path d="M4.16669 10V10.0067" stroke="#52525B" stroke-width="1.25"
                                                stroke-linecap="round" stroke-linejoin="round"></path>
                                            <path d="M4.16669 15V15.0067" stroke="#52525B" stroke-width="1.25"
                                                stroke-linecap="round" stroke-linejoin="round"></path>
                                        </svg>
                                        <p class="text-sm leading-none text-gray-600 ml-2">04/07/2023</p>
                                    </div>
                                </td>
        
                                <td class="pl-5">
                                    <div class="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                            fill="none">
                                            <path
                                                d="M12.5 5.83339L7.08333 11.2501C6.75181 11.5816 6.56556 12.0312 6.56556 12.5001C6.56556 12.9689 6.75181 13.4185 7.08333 13.7501C7.41485 14.0816 7.86449 14.2678 8.33333 14.2678C8.80217 14.2678 9.25181 14.0816 9.58333 13.7501L15 8.33339C15.663 7.67034 16.0355 6.77107 16.0355 5.83339C16.0355 4.8957 15.663 3.99643 15 3.33339C14.337 2.67034 13.4377 2.29785 12.5 2.29785C11.5623 2.29785 10.663 2.67034 10 3.33339L4.58333 8.75005C3.58877 9.74461 3.03003 11.0935 3.03003 12.5001C3.03003 13.9066 3.58877 15.2555 4.58333 16.2501C5.57789 17.2446 6.92681 17.8034 8.33333 17.8034C9.73985 17.8034 11.0888 17.2446 12.0833 16.2501L17.5 10.8334"
                                                stroke="#52525B" stroke-width="1.25" stroke-linecap="round"
                                                stroke-linejoin="round"></path>
                                        </svg>
                                        <p class="text-sm leading-none text-gray-600 ml-2">04/07/2023</p>
                                    </div>
                                </td>
                                <td class="pl-5">
                                    <button
                                        class="py-3 px-3 text-sm focus:outline-none leading-none text-red-700 bg-red-100 rounded">La Date d'échéance est atteint</button>
                                </td>
                                <td>
                                    <div class="relative px-5 pt-2">
                                        Montant à payer : 15.000 FC
                                    </div>
                                </td>
                                <td>
                                    <div class="relative px-5 pt-2">
                                        Période : Juillet
                                    </div>
                                </td>
                            </tr>
                            <tr class="h-3"></tr>
                            <tr tabindex="0" class="focus:outline-none  h-16 border border-gray-100 rounded">
                                <td>
                                    <div class="ml-5">
                                        <div
                                            class="bg-gray-200 rounded-sm w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                                            <input placeholder="checkbox" type="checkbox"
                                                class="focus:opacity-100 checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                                            <div class="check-icon hidden bg-indigo-700 text-white rounded-sm">
                                                <svg class="icon icon-tabler icon-tabler-check"
                                                    xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                    viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
                                                    stroke-linecap="round" stroke-linejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z"></path>
                                                    <path d="M5 12l5 5l10 -10"></path>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td class="focus:text-indigo-600 ">
                                    <div class="flex items-center pl-5">
                                        <p class="text-base font-medium leading-none text-gray-700 mr-2">C000001342623</p>
                                    </div>
                                </td>
                                <td class="pl-24">
                                    <div class="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                            fill="none">
                                            <path
                                                d="M9.16667 2.5L16.6667 10C17.0911 10.4745 17.0911 11.1922 16.6667 11.6667L11.6667 16.6667C11.1922 17.0911 10.4745 17.0911 10 16.6667L2.5 9.16667V5.83333C2.5 3.99238 3.99238 2.5 5.83333 2.5H9.16667"
                                                stroke="#52525B" stroke-width="1.25" stroke-linecap="round"
                                                stroke-linejoin="round"></path>
                                            <circle cx="7.50004" cy="7.49967" r="1.66667" stroke="#52525B"
                                                stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></circle>
                                        </svg>
                                        <p class="text-sm leading-none text-gray-600 ml-2">Pas Urgent</p>
                                    </div>
                                </td>
                                <td class="pl-5">
                                    <div class="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                            fill="none">
                                            <path d="M7.5 5H16.6667" stroke="#52525B" stroke-width="1.25"
                                                stroke-linecap="round" stroke-linejoin="round"></path>
                                            <path d="M7.5 10H16.6667" stroke="#52525B" stroke-width="1.25"
                                                stroke-linecap="round" stroke-linejoin="round"></path>
                                            <path d="M7.5 15H16.6667" stroke="#52525B" stroke-width="1.25"
                                                stroke-linecap="round" stroke-linejoin="round"></path>
                                            <path d="M4.16669 5V5.00667" stroke="#52525B" stroke-width="1.25"
                                                stroke-linecap="round" stroke-linejoin="round"></path>
                                            <path d="M4.16669 10V10.0067" stroke="#52525B" stroke-width="1.25"
                                                stroke-linecap="round" stroke-linejoin="round"></path>
                                            <path d="M4.16669 15V15.0067" stroke="#52525B" stroke-width="1.25"
                                                stroke-linecap="round" stroke-linejoin="round"></path>
                                        </svg>
                                        <p class="text-sm leading-none text-gray-600 ml-2">04/05/2023</p>
                                    </div>
                                </td>
        
                                <td class="pl-5">
                                    <div class="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                            fill="none">
                                            <path
                                                d="M12.5 5.83339L7.08333 11.2501C6.75181 11.5816 6.56556 12.0312 6.56556 12.5001C6.56556 12.9689 6.75181 13.4185 7.08333 13.7501C7.41485 14.0816 7.86449 14.2678 8.33333 14.2678C8.80217 14.2678 9.25181 14.0816 9.58333 13.7501L15 8.33339C15.663 7.67034 16.0355 6.77107 16.0355 5.83339C16.0355 4.8957 15.663 3.99643 15 3.33339C14.337 2.67034 13.4377 2.29785 12.5 2.29785C11.5623 2.29785 10.663 2.67034 10 3.33339L4.58333 8.75005C3.58877 9.74461 3.03003 11.0935 3.03003 12.5001C3.03003 13.9066 3.58877 15.2555 4.58333 16.2501C5.57789 17.2446 6.92681 17.8034 8.33333 17.8034C9.73985 17.8034 11.0888 17.2446 12.0833 16.2501L17.5 10.8334"
                                                stroke="#52525B" stroke-width="1.25" stroke-linecap="round"
                                                stroke-linejoin="round"></path>
                                        </svg>
                                        <p class="text-sm leading-none text-gray-600 ml-2">04/06/2023</p>
                                    </div>
                                </td>
                                <td class="pl-5">
                                    <button
                                        class="py-3 px-6 focus:outline-none text-sm leading-none text-gray-700 bg-green-100 rounded">Payé il y'a x jours</button>
                                </td>
        
                                <td>
                                    <div class="relative px-5 pt-2">
                                        Montant à payer : 15.000 FC
                                    </div>
                                </td>
                                <td>
                                    <div class="relative px-5 pt-2">
                                        Période : Juin
                                    </div>
                                </td>
                        </tr>
        
                        <tr class="h-3"></tr>
                        <tr tabindex="0" class="focus:outline-none h-16 border border-gray-100 rounded">
                            <td>
                                <div class="ml-5">
                                    <div
                                        class="bg-gray-200 rounded-sm w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                                        <input placeholder="checkbox" type="checkbox"
                                            class="focus:opacity-100 checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                                        <div class="check-icon hidden bg-indigo-700 text-white rounded-sm">
                                            <svg class="icon icon-tabler icon-tabler-check"
                                                xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
                                                stroke-linecap="round" stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z"></path>
                                                <path d="M5 12l5 5l10 -10"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td class="">
                                <div class="flex items-center pl-5">
                                    <p class="text-base font-medium leading-none text-gray-700 mr-2">D000001231478</p>
                                </div>
                            </td>
                            <td class="pl-24">
                                <div class="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                        fill="none">
                                        <path
                                            d="M9.16667 2.5L16.6667 10C17.0911 10.4745 17.0911 11.1922 16.6667 11.6667L11.6667 16.6667C11.1922 17.0911 10.4745 17.0911 10 16.6667L2.5 9.16667V5.83333C2.5 3.99238 3.99238 2.5 5.83333 2.5H9.16667"
                                            stroke="#52525B" stroke-width="1.25" stroke-linecap="round"
                                            stroke-linejoin="round"></path>
                                        <circle cx="7.50004" cy="7.49967" r="1.66667" stroke="#52525B"
                                            stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></circle>
                                    </svg>
                                    <p class="text-sm leading-none text-gray-600 ml-2">Pas Urgent</p>
                                </div>
                            </td>
                            <td class="pl-5">
                                <div class="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                        fill="none">
                                        <path d="M7.5 5H16.6667" stroke="#52525B" stroke-width="1.25"
                                            stroke-linecap="round" stroke-linejoin="round"></path>
                                        <path d="M7.5 10H16.6667" stroke="#52525B" stroke-width="1.25"
                                            stroke-linecap="round" stroke-linejoin="round"></path>
                                        <path d="M7.5 15H16.6667" stroke="#52525B" stroke-width="1.25"
                                            stroke-linecap="round" stroke-linejoin="round"></path>
                                        <path d="M4.16669 5V5.00667" stroke="#52525B" stroke-width="1.25"
                                            stroke-linecap="round" stroke-linejoin="round"></path>
                                        <path d="M4.16669 10V10.0067" stroke="#52525B" stroke-width="1.25"
                                            stroke-linecap="round" stroke-linejoin="round"></path>
                                        <path d="M4.16669 15V15.0067" stroke="#52525B" stroke-width="1.25"
                                            stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                    <p class="text-sm leading-none text-gray-600 ml-2">27/10/2023</p>
                                </div>
                            </td>
        
                            <td class="pl-5">
                                <div class="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                        fill="none">
                                        <path
                                            d="M12.5 5.83339L7.08333 11.2501C6.75181 11.5816 6.56556 12.0312 6.56556 12.5001C6.56556 12.9689 6.75181 13.4185 7.08333 13.7501C7.41485 14.0816 7.86449 14.2678 8.33333 14.2678C8.80217 14.2678 9.25181 14.0816 9.58333 13.7501L15 8.33339C15.663 7.67034 16.0355 6.77107 16.0355 5.83339C16.0355 4.8957 15.663 3.99643 15 3.33339C14.337 2.67034 13.4377 2.29785 12.5 2.29785C11.5623 2.29785 10.663 2.67034 10 3.33339L4.58333 8.75005C3.58877 9.74461 3.03003 11.0935 3.03003 12.5001C3.03003 13.9066 3.58877 15.2555 4.58333 16.2501C5.57789 17.2446 6.92681 17.8034 8.33333 17.8034C9.73985 17.8034 11.0888 17.2446 12.0833 16.2501L17.5 10.8334"
                                            stroke="#52525B" stroke-width="1.25" stroke-linecap="round"
                                            stroke-linejoin="round"></path>
                                    </svg>
                                    <p class="text-sm leading-none text-gray-600 ml-2">20/11/2023</p>
                                </div>
                            </td>
                            <td class="pl-5">
                                <button
                                    class="py-3 px-3 text-sm leading-none text-gray-700 bg-gray-100 hover:bg-gray-200 rounded focus:outline-none">A payer dans x jours</button>
                            </td>
                            <td>
                                <div class="relative px-5 pt-2">
                                    Montant à payer : 15.000 FC
                                </div>
                            </td>
                            <td>
                                <div class="relative px-5 pt-2">
                                    Période : Octobre
                                </div>
                            </td>
        
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        </div>
    </div>
</template>