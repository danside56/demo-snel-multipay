<script setup>
const emit = defineEmits(["close_modal"])
const closeModal = ()=>{
    emit('close_modal')
}
</script>
<template>
    <div class="relative z-10">
        <div class="fixed inset-0 bg-gray-600 bg-opacity-50 backdrop-blur-sm transition-opacity" ></div>
        <div id="authentication-modal" class="fixed top-50 left-50 right- z-50 w-full p-4 overflow-x-hidden  md:inset-0 h-[calc(100%-1rem)]">
            <div class="relative w-full max-w-md max-h-full mx-auto">
                <!-- Modal content -->
                <div class="relative bg-white rounded-lg shadow">
                    <button type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="authentication-modal" @click="closeModal">
                        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                        </svg>
                        <span class="sr-only">Close modal</span>
                    </button>
                    <div class="px-6 py-6 lg:px-8">
                        <img src="https://zambianobserver.com/wp-content/uploads/2022/08/Airtel.png" alt="" class=" w-40 mx-auto">
                        <h3 class="mb-4 text-xl font-medium text-center text-gray-900">Paiement par Airtel Money</h3>
                        <form class="space-y-6" action="#">
                            <div>
                                <label for="num_tel" class="block mb-2 text-sm font-medium text-gray-900">Numéro de téléphone</label>
                                <input type="tel" name="num_tel" id="num_tel" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="+243123456789" required>
                            </div>
                            <div>
                                <label for="montant" class="block mb-2 text-sm font-medium text-gray-900">Montant à payer</label>
                                <input type="number" name="num_tel" id="num_tel" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="FC" value="15.000" disabled required>
                            </div>
                            <div>
                                <label for="somme_payer" class="block mb-2 text-sm font-medium text-gray-900">Combien voulez-vous payer ?</label>
                                <input type="number" name="somme_payer" id="somme_payer" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="FC" value="15000" required>
                            </div>
                            <div>
                                <label for="password" class="block mb-2 text-sm font-medium text-gray-900">Devise</label>
                                <input type="text" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" value="Franc congolais"  disabled required>
                            </div>
                            <div class="flex justify-between">
                                <div class="flex items-start">
                                    <div class="flex items-center h-5">
                                        <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300" required>
                                    </div>
                                    <label for="remember" class="ml-2 text-sm font-medium text-gray-900">j'accepte les termes et conditions</label>
                                </div>
                            </div>
                            <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Confirmer</button>
                            
                        </form>
                    </div>
                </div>
            </div>
        </div> 
    </div>
</template>