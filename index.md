---
layout: default
title: Programming Languages @ Bristol
---

<img src="/assets/images/suspension-lambda.jpeg" class="rounded mx-auto d-block" style="max-height: 30rem; margin-bottom: 1em">

This is the website of the **Programming Languages Research Group** at the [University of Bristol](https://www.bristol.ac.uk).

Our research interests include:
  * design and implementation
  * functional programming
  * program analysis
  * program synthesis
  * security and programming languages
  * mathematical foundations

Visit our [GitHub page](https://github.com/bristolpl).
<a href="https://github.com/bristolpl">
    <i class="icon-github" style="font-size: 2em"></i>
</a>

## News

<table class="table">
  <thead></thead>
  <tbody>
  {% for item in site.data.news %}
    <tr>
      <td scope="row"><span class="newsdate">{{ item.date }}</span></td>
      <td>{{ item.contents | markdownify }}</td>
    </tr>
  {% endfor %}
  </tbody>
</table>

## People

{% include_relative people.md %}

## Publications

<div id="searchresults"></div>