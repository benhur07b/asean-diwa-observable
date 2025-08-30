---
theme: air
style: ../assets/css/diwa.css
---

# Numerical indicators

<div class="card card-note">
<strong>NOTE</strong><br>
The visualizations presented here are based on available data but due to the lack of standardized and comparable data across ASEAN member states, some gaps and limitations may exist.
<br>
Users are advised to use caution when interpreting the data and to consider these limitations when making conclusions or decisions.
</div>
<br>

<h2 id="indicators_gender_gap_internet_access">Gender Gap in Internet Access</h2>

<div class="card">
The difference between the percentage of women and the percentage of men who use the internet within a given population. 

A positive value indicates women generally have more access while a negative value indicates they generally have less.
</div>

<div class="card">

View data on [**Datasette**](https://data.aseandiwa.org/asean_diwa/indicators_gender_gap_internet_access).
</div>

```js
const indicators_gender_gap_internet_access = FileAttachment("../data/indicators_numerical_gender_gap_internet_access.csv").csv({typed: true});
```


```js
Inputs.table(indicators_gender_gap_internet_access, {
    format: {
        year: (x) => (String(x)),    
    }
})
```

<!-- ```js
// Radio button input to choose market segment
const select_country_num0001 = view(
    Inputs.select(
        d3.group(indicators_gender_gap_internet_access, (d) => d.country),
        {sort: true, label: "Select Country"}
    )
);
// const pickCountryIndicatorsGenderGapInternetAccess = Generators.input(pickCountryIndicatorsGenderGapInternetAccessInput);
``` -->


<br><br> 
<h2 id="indicators_women_in_ict_workforce">Percentage of Women in the ICT Workforce</h2>

<div class="card">
The proportion of women among all individuals employed in ICT-related occupations or the ICT sector, expressed as a percentage.
</div>

<div class="card">

View data on [**Datasette**](https://data.aseandiwa.org/asean_diwa/indicators_women_in_ict_workforce).
</div>

```js
const indicators_women_in_ict_workforce = FileAttachment("../data/indicators_numerical_women_in_ict_workforce.csv").csv({typed: true});
```


```js
Inputs.table(indicators_women_in_ict_workforce, {
    format: {
        year: (x) => (String(x)),    
    }
})
```

<br><br> 
<h2 id="indicators_women_in_ict_management">Percentage of Women in ICT Management Positions</h2>

<div class="card">
The proportion of women occupying managerial or leadership roles within the ICT sector, expressed as a percentage.
</div>

<div class="card">

View data on [**Datasette**](https://data.aseandiwa.org/asean_diwa/indicators_women_in_ict_management).
</div>


<br><br> 
<h2 id="indicators_women_in_ict_leadership">Percentage of Women in ICT Leadership Roles</h2>

<div class="card">
The proportion of women in high-level leadership positions (e.g., C-suite or board roles) within ICT organizations.
</div>

<div class="card">

View data on [**Datasette**](https://data.aseandiwa.org/asean_diwa/indicators_women_in_ict_leadership).
</div>


<br><br> 
<h2 id="indicators_gender_paygap_in_ict">Gender Pay Gap in ICT Sector</h2>

<div class="card">
The difference in average earnings between men and women in the ICT sector, typically expressed as a percentage of men’s earnings (e.g., women earn 18-30% less than men).
</div>

<div class="card">

View data on [**Datasette**](https://data.aseandiwa.org/asean_diwa/indicators_gender_paygap_in_ict).
</div>

<br><br> 
<h2 id="indicators_women_graduates_in_stem">Percentage Women Graduates in STEM Fields</h2>

<div class="card">
The proportion of women among all graduates in science, technology, engineering, and mathematics (STEM) fields, expressed as a percentage.
</div>

<div class="card">

View data on [**Datasette**](https://data.aseandiwa.org/asean_diwa/indicators_women_graduates_in_stem).
</div>


<br><br> 
<h2 id="indicators_enrolment_rates_in_ict">Enrolment Rates in ICT-Related Courses</h2>

<div class="card">
The percentage of male/female students enrolled in educational programs related to ICT, such as computer science or telecommunications.
</div>

<div class="card">

View data on [**Datasette**](https://data.aseandiwa.org/asean_diwa/indicators_enrolment_rates_in_ict).
</div>


<br><br> 
<h2 id="indicators_completion_rates_in_ict">Completion Rates in ICT-Related Courses</h2>

<div class="card">
The percentage of male/female students who successfully complete ICT-related educational programs.
</div>

<div class="card">

View data on [**Datasette**](https://data.aseandiwa.org/asean_diwa/indicators_completion_rates_in_ict).
</div>


<br><br> 
<h2 id="indicators_gender_phone_ownership">Phone Ownership</h2>

<div class="card">
The percentage of individuals who own a mobile telephone, disaggregated by gender.
</div>

<div class="card">

View data on [**Datasette**](https://data.aseandiwa.org/asean_diwa/indicators_gender_phone_ownership).
</div>



<br><br> 
<h2 id="indicators_ict_skills">Proportion of Youth and Adults with ICT Skills</h2>

<div class="card">
The percentage of youth (aged 15-24) and adults (aged 15+) who have specific ICT skills, categorized by skill type. Disaggregated if possible.
</div>

<div class="card">

View data on [**Datasette**](https://data.aseandiwa.org/asean_diwa/indicators_ict_skills).
</div>


<br><br> 
<h2 id="indicators_graduates_by_field">Share of Female Graduates by Field</h2>

<div class="card">
World Bank indicator measures the percentage of female graduates across different fields of study in tertiary education.
</div>

<div class="card">

View data on [**Datasette**](https://data.aseandiwa.org/asean_diwa/indicators_graduates_by_field).
</div>


<br><br> 
<h2 id="indicators_graduates_in_ict">Share of Female Graduates in ICT Programs</h2>

<div class="card">
The percentage of female graduates in ICT-related programs at the tertiary education level.
</div>

<div class="card">

View data on [**Datasette**](https://data.aseandiwa.org/asean_diwa/indicators_graduates_in_ict).
</div>


<br><br>