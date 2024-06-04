---
layout: default
title: Programming Languages @ Bristol
---

<img src="/assets/images/suspension-lambda.jpeg" class="rounded mx-auto d-block" style="max-height: 30rem; margin-bottom: 1em">

This is the website of the **Programming Languages Research Group** at the [University of Bristol](https://www.bristol.ac.uk).

Our research interests include:
  * functional programming
  * program analysis
  * program synthesis
  * verification
  * security, cryptography, and programming languages
  * semantics of programming languages
  * type theory
  * bidirectional programming

Visit our [GitHub page](https://github.com/plrg-bristol).
<a href="https://github.com/plrg-bristol">
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

## Teaching

| COMS20007 | Programming Languages and Computation    |
| COMS30040 | Lambda Calculus and Types                                                                               |
| COMSM0067 | Advanced Topics in Programming Languages <br>
              ([2021/22](https://plrg-bristol.github.io/APL-2021-Unit-Website/) |

## Publications

<div id="searchresults"></div>