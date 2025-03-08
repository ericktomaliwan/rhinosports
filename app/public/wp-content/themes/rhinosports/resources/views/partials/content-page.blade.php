
<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
@php(the_content())
</div>

@if ($pagination)
  <nav class="page-nav" aria-label="Page">
    {!! $pagination !!}
  </nav>
@endif
