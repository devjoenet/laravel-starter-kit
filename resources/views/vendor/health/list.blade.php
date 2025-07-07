<html lang="en" class="{{ $theme == 'dark' ? 'dark' : '' }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
        <title>{{ __('health::notifications.health_results') }}</title>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css">
        {{ $assets }}
    </head>

    <body class="mt-7 bg-gray-100 antialiased md:mt-12 dark:bg-gray-900">
        <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div class="flex flex-wrap justify-center space-y-3">
                <h4 class="w-full text-center text-2xl font-bold text-gray-900 dark:text-white">
                    {{ __('health::notifications.laravel_health') }}</h4>
                <div class="flex w-full justify-center">
                    <x-health-logo />
                </div>
                @if ($lastRanAt)
                    <div
                         class="{{ $lastRanAt->diffInMinutes() > 5 ? 'text-red-400' : 'text-gray-400 dark:text-gray-500' }} text-center text-sm font-medium">
                        {{ __('health::notifications.check_results_from') }} {{ $lastRanAt->diffForHumans() }}
                    </div>
                @endif
            </div>
            <div class="my-6 px-2 md:mt-8 md:px-0">
                @if (count($checkResults?->storedCheckResults ?? []))
                    <dl class="grid grid-cols-1 gap-2.5 sm:gap-3 md:grid-cols-2 md:gap-5 lg:grid-cols-3">
                        @foreach ($checkResults->storedCheckResults as $result)
                            <div
                                 class="flex transform items-start space-x-2 overflow-hidden rounded-xl bg-white px-4 py-5 text-opacity-0 shadow-md shadow-gray-200 transition sm:p-6 md:min-h-[130px] md:space-x-3 dark:border-t dark:border-gray-700 dark:bg-gray-800 dark:shadow-md dark:shadow-black/25">
                                <x-health-status-indicator :result="$result" />
                                <div>
                                    <dd class="-mt-1 font-bold text-gray-900 md:mt-1 md:text-xl dark:text-white">
                                        {{ $result->label }}
                                    </dd>
                                    <dt class="mt-0 text-sm font-medium text-gray-600 md:mt-1 dark:text-gray-300">
                                        @if (!empty($result->notificationMessage))
                                            {{ $result->notificationMessage }}
                                        @else
                                            {{ $result->shortSummary }}
                                        @endif
                                    </dt>
                                </div>
                            </div>
                        @endforeach
                    </dl>
                @endif
            </div>
        </div>
    </body>
</html>
