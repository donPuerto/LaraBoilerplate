<!DOCTYPE html>
<!--[if lte IE 6]>
<html class="preIE7 preIE8 preIE9"><![endif]-->
<!--[if IE 7]>
<html class="preIE8 preIE9"><![endif]-->
<!--[if IE 8]>
<html class="preIE9"><![endif]-->
<!--[if gte IE 9]><!-->
<html lang="en"><!--<![endif]-->
<head>
    <title> @yield('titlename') </title>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <meta name="author" content="Don Puerto">
    <meta name="description" content="Project Content">
    <meta name="keywords" content="keywords,here">
    <link href="{{ elixir('css/app.css') }}" rel="stylesheet">

    {{--@include('partials.stylessheets.bootstraplib')--}}
    <!-- Fonts -->
    <link href='//fonts.googleapis.com/css?family=Roboto:400,300' rel='stylesheet' type='text/css'>

</head>
<body>
    {{--navigation bar--}}
    @include('partials.layout.navbar')
    {{--validation errors--}}
    @include('partials.layout.validationerrors')
    {{--Extended Page--}}
    @yield('content')

    {{--
    JQuery - Bootsrap JS library using partial script library
    @include('partials.scripts.jbootslib')
    --}}
    <script src="{{ elixir('js/app.js') }}"></script>
</body>
</html>