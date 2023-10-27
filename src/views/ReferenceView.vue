<script setup>
import NavigationMenu from '@/components/NavigationMenu.vue';
import IconPayment from '../components/icons/IconPayment.vue';
</script>

<template>
    <div>
        <header>
            <NavigationMenu />
        </header>
        <main>
            <div class="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
                <div class="sm:mx-auto sm:w-full sm:max-w-md">
                    <IconPayment class="mx-auto h-20 w-auto" />
                    <h2 class="mt-6 text-center text-3xl font-bold leading-9 tracking-tight text-gray-900">Système de
                        paiement des factures en ligne</h2>
                </div>
                <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-[680px]">
                    <div class="bg-white py-12 shadow sm:rounded-lg sm:px-12">
                        <form class="space-y-6" action="/facture-table" method="POST">
                            <div>
                                <label for="ville" class="block text-sm font-medium leading-6 text-gray-900"></label>
                                <div>
                                    <label for="ville" class="block text-sm font-medium leading-6 text-gray-900">Villes</label>
                                    <select id="ville" name="ville" class="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                      <option selected>Kinshasa</option>
                                      <option>Lubumbashi</option>
                                      <option>Mbuji-Mayi</option>
                                      <option>Matadi</option>
                                      <option>Boma</option>
                                      <option>Lisala</option>
                                    </select>
                                  </div>
                            </div>
                            <div>
                                <label for="numero_client" class="block text-sm font-medium leading-6 text-gray-900">Saisissez le numéro client</label>
                                <div class="mt-2">
                                  <input id="numero_client" name="numero_client" type="text" autocomplete="numero_client" required class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                </div>
                              </div>
                              <div>
                                <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Vérifier</button>
                              </div>
                        </form>
                    </div>
                </div>
            </div>

            <section class="bg-white">
                <div class="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
                    <h2
                        class="mb-8 lg:mb-16 text-3xl font-extrabold tracking-tight leading-tight text-center text-indigo-950 md:text-4xl">
                        Nos Partenaires</h2>
                    <div
                        class="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-6 dark:text-gray-400">
                        <a href="#" class="flex justify-center items-center">
                            <img src="https://download.logo.wine/logo/Orange_Money/Orange_Money-Logo.wine.png" alt="">
                        </a>
                        <a href="#" class="flex justify-center items-center">
                            <img src="https://zambianobserver.com/wp-content/uploads/2022/08/Airtel.png" alt="">
                        </a>
                        <a href="#" class="flex justify-center items-center">
                            <img src="@/assets/images/mpesa.png" alt="">
                        </a>

                        <a href="#" class="flex justify-center items-center">
                            <img src="https://congowebservices.com/osipay/assets/uploads/illicocash.png" alt="">
                        </a>
                        <a href="#" class="flex justify-center items-center">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/1/15/Equity_Group_Logo.png" alt="">
                        </a>
                        <a href="#" class="flex justify-center items-center">
                            <img src="https://tmb.cd/wp-content/uploads/2021/12/logo-carre-big.png" alt="">
                        </a>
                    </div>
                </div>
            </section>

    </main>
</div></template>

<style></style>