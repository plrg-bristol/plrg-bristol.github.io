{% for group in site.data.people %}
### {{ group.type }}

<div class="d-flex flex-row flex-wrap justify-content-center">
  {% for person in group.members %}
      <div class="p-4 bd-highlight">
      <figure class="figure">
        <a href="{{ person.url }}">
          {% if person.pic == nil %}
            <i class="icon-user" style="font-size: 12rem"></i>
          {% else %}
            <img class="figure-img rounded"
                src="{{ "/assets/images/" | append: person.pic }}">
          {% endif %}
        </a>
        <figcaption class="figure-caption text-center">
          <a href="{{ person.url }}">
            {{ person.name }}
          </a>
        </figcaption>
      </figure>
  </div>
  {% endfor %}
</div>

{% endfor %}