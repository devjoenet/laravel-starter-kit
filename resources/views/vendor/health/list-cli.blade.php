<div class="mx-2 my-1">
    @if (count($checkResults?->storedCheckResults ?? []))
        <div class="max-w-120 mb-1 w-full bg-blue-800 py-1 text-white">
            <span class="w-1/2 px-2 text-left">Laravel Health Check Results</span>
            <span class="w-1/2 px-2 text-right">
                Last ran all the checks
                @if ($lastRanAt->diffInMinutes() < 1)
                    just now
                @else
                    {{ $lastRanAt->diffForHumans() }}
                @endif
            </span>
        </div>
        @foreach ($checkResults->storedCheckResults as $result)
            <div class="space-x-1">
                <span class="w-10">
                    <b class="{{ $color($result->status) }} uppercase">
                        {{ ucfirst($result->status) }}
                    </b>
                </span>
                <span>{{ $result->label }}</span>
                <span class="text-gray">›</span>
                <span class="{{ $color($result->status) }}"> {{ $result->shortSummary }}</span>
            </div>
            @if ($result->notificationMessage)
                <div class="text-gray ml-11">
                    ⇂ {{ $result->notificationMessage }}
                </div>
            @endif
        @endforeach
    @else
        <div>
            No checks have run yet...<br />
            Please execute this command:
            <br /><br />
            <b>php artisan health:check</b>
        </div>
    @endif
</div>
