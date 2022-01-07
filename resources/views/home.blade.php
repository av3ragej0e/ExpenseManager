@extends('layouts.app')

@section('content')

<div id="app">



<v-app>
                <v-main>

                <router-view :auth="{{$page['auth']}}"></router-view>


                <!-- <example-component></example-component> -->
                   
                </v-main>
            </v-app>

            <!-- <div class="card">
                <div class="card-header">{{ __('Dashboard') }}</div>

                <div class="card-body" id="app">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif

                    {{ __('You are logged in!') }}

                    <example-component></example-component>

                </div>
            </div> -->
</div>
@endsection
