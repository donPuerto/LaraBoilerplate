@extends('masterpage')
@section('titlename') Login @endsection


{{--@section('content')
    <h1>Login</h1>
@endsection--}}

@section('content')
    <div class="container" style="margin-top: 100px">
        <div class="row">
            <div class="col-md-4 col-md-offset-8">
                <div class="panel panel-default">

                    <div class="panel-body  styleit">

                        <img src="/image/logodonpuerto2.png" alt="Official Logo">
                        <hr>

                        {!! Form::open(['url' => 'auth/login', 'class' => 'form']) !!}

                            <div class="form-group">
                                <label>{{ trans('form.label.email') }}</label>
                                {!! Form::email('email', '', ['class'=> 'form-control']) !!}
                            </div>

                            <div class="form-group">
                                <label>{{ trans('form.label.password') }}</label>
                                {!! Form::password('password', ['class'=> 'form-control']) !!}
                            </div>

                            <div class="checkbox">
                                <label><input name="remember" type="checkbox">{{ trans('form.label.remember') }}</label>
                            </div>

                            <div>
                                {!! Form::submit(trans('form.login.submit'),['class' => 'btn btn-primary']) !!}
                                <a href="{{ url('password/email') }}">{{ trans('passwords.forgot') }}</a>
                            </div>

                        {!! Form::close() !!}

                    </div> {{--panel-body--}}
                </div>
            </div>
        </div>
    </div>
@endsection


