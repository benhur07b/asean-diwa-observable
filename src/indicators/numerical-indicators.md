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

<br><br> 
<h2 id="indicators_women_in_ict_leadership">Percentage of Women in ICT Leadership Roles</h2>

<br><br> 
<h2 id="indicators_gender_paygap_in_ict">Gender Pay Gap in ICT Sector</h2>

<br><br> 
<h2 id="indicators_women_graduates_in_stem">Percentage Women Graduates in STEM Fields</h2>

<br><br> 
<h2 id="indicators_enrolment_rates_in_ict">Enrolment Rates in ICT-Related Courses</h2>

<br><br> 
<h2 id="indicators_completion_rates_in_ict">Completion Rates in ICT-Related Courses</h2>

<br><br> 
<h2 id="indicators_gender_phone_ownership">Phone Ownership</h2>

<br><br> 
<h2 id="indicators_ict_skills">Proportion of Youth and Adults with ICT Skills</h2>

<br><br> 
<h2 id="indicators_graduates_by_field">Share of Female Graduates by Field</h2>

<br><br> 
<h2 id="indicators_graduates_in_ict">Share of Female Graduates in ICT Programs</h2>

<br><br>