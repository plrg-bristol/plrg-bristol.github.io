{% for group in site.data.people %}
### {{ group.type }}

<div class="d-flex flex-row flex-wrap justify-content-center">
  {% for person in group.members %}
      <div class="p-4 bd-highlight">
    <figure class="figure">
      <img class="figure-img img-fluid rounded" style="max-height: 12rem; max-width: 12rem;" src="{{ "/assets/images/" | append: person.pic }}">
      <figcaption class="figure-caption text-center"><a href="{{ person.url }}">{{ person.name }}</a></figcaption>
    </figure>
  </div>
  {% endfor %}
</div>

{% endfor %}