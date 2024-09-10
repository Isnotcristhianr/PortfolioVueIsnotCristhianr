<script setup lang="ts">
//icons
import { Icon } from '@iconify/vue'
</script>

<template>
<div class="max-w-screen-lg mx-auto pl-4 pr-4 pb-5">
    <h2 class="text-4xl font-bold text-start text-primary mt-10 mb-10 flex items-center">
        <Icon icon="pajamas:work" width="32" height="32" class="mr-2" />
        {{ $t('title1') }}
    </h2>
    <ol class="relative border-s border-gray-200 dark:border-gray-700">
        <li class="mb-10 ms-4">
            <div class="flex flex-col sm:flex-row sm:items-start">
                <div class="flex-shrink-0 w-56">
                    <div
                        class="absolute w-3 h-3 bg-secondary rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"
                    ></div>
                    <h3 class="text-lg font-semibold text-secondary">
                        {{ $t('exp1.title') }}
                    </h3>
                    <h4 class="text-md font-medium ">
                            {{ $t('exp1.company') }}
                    </h4>
                    <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                        {{ $t('exp1.date') }}
                    </time>
                </div>
                <div class="sm:ml-4 mt-2 sm:mt-0 flex-grow">
                    <p class="mb-4 text-base font-normal text-gray-400 dark:text-gray-400">
                        {{ $t('exp1.description') }}
                    </p>
                </div>
            </div>
        </li>
        <li class="mb-10 ms-4">
            <div class="flex flex-col sm:flex-row sm:items-start">
                <div class="flex-shrink-0 w-56">
                    <div
                        class="absolute w-3 h-3 bg-secondary rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"
                    ></div>
                    <h3 class="text-lg font-semibold text-secondary">
                        {{ $t('exp2.title') }}
                    </h3>
                    <h4 class="text-md font-medium ">
                            {{ $t('exp2.company') }}
                    </h4>
                    <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                        {{ $t('exp2.date') }}
                    </time>
                </div>
                <div class="sm:ml-4 mt-2 sm:mt-0 flex-grow">
                    <p class="mb-4 text-base font-normal text-gray-400 dark:text-gray-400">
                        {{ $t('exp2.description') }}
                    </p>
                </div>
            </div>
        </li>
        <li class="mb-10 ms-4">
            <div class="flex flex-col sm:flex-row sm:items-start">
                <div class="flex-shrink-0 w-56">
                    <div
                        class="absolute w-3 h-3 bg-secondary rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"
                    ></div>
                    <h3 class="text-lg font-semibold text-secondary">
                        {{ $t('exp3.title') }}
                    </h3>
                    <h4 class="text-md font-medium ">
                            {{ $t('exp3.company') }}
                    </h4>
                    <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                        {{ $t('exp3.date') }}
                    </time>
                </div>
                <div class="sm:ml-4 mt-2 sm:mt-0 flex-grow">
                    <p class="mb-4 text-base font-normal text-gray-400 dark:text-gray-400">
                        {{ $t('exp3.description') }}
                    </p>
                </div>
            </div>
        </li>
        <li class="mb-10 ms-4">
            <div class="flex flex-col sm:flex-row sm:items-start">
                <div class="flex-shrink-0 w-56">
                    <div
                        class="absolute w-3 h-3 bg-secondary rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"
                    ></div>
                    <h3 class="text-lg font-semibold text-secondary">
                        {{ $t('exp4.title') }}
                    </h3>
                    <h4 class="text-md font-medium ">
                            {{ $t('exp4.company') }}
                    </h4>
                    <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                        {{ $t('exp4.date') }}
                    </time>
                </div>
                <div class="sm:ml-4 mt-2 sm:mt-0 flex-grow">
                    <p class="mb-4 text-base font-normal text-gray-400 dark:text-gray-400">
                        {{ $t('exp4.description') }}
                    </p>
                </div>
            </div>
        </li>
    </ol>
</div>
</template>
