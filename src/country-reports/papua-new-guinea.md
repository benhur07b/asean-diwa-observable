---
theme: air
style: ../assets/css/diwa.css
---

# Papua New Guinea

<div class="card card-note">
<strong>NOTE</strong><br>
The data presented here are based on available data but due to the lack of standardized and comparable data across ASEAN member states, some gaps and limitations may exist.
<br>
Users are advised to use caution when interpreting the data and to consider these limitations when making conclusions or decisions.
</div>
<br>

## Key findings

Papua New Guinea has the least coverage, with only a single recorded data point. This prevents meaningful analysis of trends or comparisons.

In the ASEAN context, this limited coverage signals a serious barrier to mainstreaming gender and ICT. Without comprehensive data, it is difficult to identify disparities or design targeted interventions to close them. For Papua New Guinea, and for ASEAN as a whole, this underscores the need for greater investment in data collection and monitoring systems that can capture the nuances of gender and digital inclusion. Reliable information is a prerequisite for aligning ICT development with equity goals and ensuring that women are not left behind in the digital transition.

<br>

## Categorical indicators

There are no reported comprehensive policies or initiatives in Papua New Guinea that address the intersection of gender and ICT. The country does not have broad gender equality frameworks that serve as a foundation for reducing the digital gender divide, nor are there reported efforts to integrate gender considerations into ICT-specific strategies. Similarly, there are no reported mechanisms for gender budgeting or mainstreaming, and no specialized government bodies dedicated to gender and ICT. Programs aimed at supporting women in ICT through education, skills development, workplace equality, entrepreneurship support, or technology access have also not been reported. In addition, no initiatives exist for the systematic collection and analysis of gender-disaggregated ICT data, which limits the ability to assess and address disparities.

<br>

## Numerical indicators

Papua New Guinea records a single value showing the gender gap in internet access for 2022. No additional information is available on education, workforce participation, or digital skills.

| **Indicator** | Observation |
| --- | --- |
| **Gender Gap in Internet Access** | In 2023, the gap was 23 percentage points. Only one isolated indicator was recorded in 2022. With no additional years or categories, it serves as a snapshot rather than a trend. |
| **Percentage of Women in the ICT Workforce** | N/A |
| **Percentage of Women in ICT Management Positions** | N/A |
| **Percentage of Women in ICT Leadership Roles** | N/A |
| **Gender Pay Gap in ICT Sector** | N/A |
| **Percentage Women Graduates in STEM Field** | N/A |
| **Enrolment and Completion Rates in ICT-Related Courses** | N/A |
| **Gender Representation in ICT Startups** | N/A |
| **Phone Ownership** | N/A |
| **Proportion of Youth and Adults with ICT Skills** | N/A |
| **Proportion of Youth and Adults with Digital Literacy Skills** | N/A |
| **Share of Female Graduates by Field** | N/A |
| **Share of Female Graduates in ICT Programs** | N/A |

<br>

## Gender Gap in Internet Access

<div class="card">
The difference between the percentage of women and the percentage of men who use the internet within a given population. 

A positive value indicates women generally have more access while a negative value indicates they generally have less.
</div>

```js
const indicators_gender_gap_internet_access = FileAttachment("../data/indicators_numerical_gender_gap_internet_access.csv").csv({typed: true});
```

```js
const indicators_gender_gap_internet_access_filtered = indicators_gender_gap_internet_access.filter(row => row.country === 'Papua New Guinea')
  .map((row) => {
    return { 
      year: (new Date(parseInt(row.year), 0, 1)), 
      indicator_value: parseFloat(row.indicator_value)
    }
  })
```

```js
Plot.plot({
    x: {interval: Plot.timeInterval("1 year")},
    marks: [
        Plot.barY(
            indicators_gender_gap_internet_access_filtered, 
            {x: "year", y: "indicator_value", r: 16, fill: "#C8057C",  tip: true}),
        Plot.axisX({label: "Year"}),
        Plot.axisY({label: "Gender Gap in Internet Access (%)"}),
    ]
})
```

<br>

## Women in ICT Workforce

<div class="card">
The proportion of women among all individuals employed in ICT-related occupations or the ICT sector, expressed as a percentage.
</div>

```js
Plot.plot({
    marks: [
        Plot.frame(),
        Plot.text(["No data"])
    ]
})
```

<br>

## Women in ICT Management Positions

<div class="card">
The proportion of women occupying managerial or leadership roles within the ICT sector, expressed as a percentage.
</div>

```js
Plot.plot({
    marks: [
        Plot.frame(),
        Plot.text(["No data"])
    ]
})
```

<br>

## Women in ICT Leadership Roles

<div class="card">
The proportion of women in high-level leadership positions (e.g., C-suite or board roles) within ICT organizations.
</div>

```js
Plot.plot({
    marks: [
        Plot.frame(),
        Plot.text(["No data"])
    ]
})
```

<br>

## Gender Pay Gap in ICT Sector

<div class="card">
The difference in average earnings between men and women in the ICT sector, typically expressed as a percentage of men’s earnings (e.g., women earn 18-30% less than men).
</div>

```js
Plot.plot({
    marks: [
        Plot.frame(),
        Plot.text(["No data"])
    ]
})
```

<br>

## Women Graduates in STEM Fields

<div class="card">
The proportion of women among all graduates in science, technology, engineering, and mathematics (STEM) fields, expressed as a percentage.
</div>

```js
Plot.plot({
    marks: [
        Plot.frame(),
        Plot.text(["No data"])
    ]
})
```

<br>

## Enrolment Rates in ICT-Related Courses

<div class="card">
The percentage of female students enrolled in educational programs related to ICT, such as computer science or telecommunications.
</div>

```js
Plot.plot({
    marks: [
        Plot.frame(),
        Plot.text(["No data"])
    ]
})
```

<br>

## Completion Rates in ICT-Related Courses

<div class="card">
 The percentage of male/female students who successfully complete ICT-related educational programs.
</div>

```js
Plot.plot({
    marks: [
        Plot.frame(),
        Plot.text(["No data"])
    ]
})
```

<br>

## Phone ownership

<div class="card">
The percentage of individuals who own a mobile telephone, disaggregated by gender.
</div>

```js
Plot.plot({
    marks: [
        Plot.frame(),
        Plot.text(["No data"])
    ]
})
```

<br>

## Proportion of Youth and Adults with ICT Skills

<div class="card">
The percentage of youth (aged 15-24) and adults (aged 15+) who have specific ICT skills, categorized by skill type. Disaggregated if possible.
 </div>

```js
Plot.plot({
    marks: [
        Plot.frame(),
        Plot.text(["No data"])
    ]
})
```

<br>

## Share of Female Graduates by Field

<div class="card">
World Bank indicator measures the percentage of female graduates across different fields of study in tertiary education.
 </div>

```js
Plot.plot({
    marks: [
        Plot.frame(),
        Plot.text(["No data"])
    ]
})
```

<br>

## Share of Female Graduates in ICT Programs

<div class="card">
The percentage of female graduates in ICT-related programs at the tertiary education level.
</div>

```js
Plot.plot({
    marks: [
        Plot.frame(),
        Plot.text(["No data"])
    ]
})
```

<br>

**Read more in our <a href="../assets/files/SmartCT-ASEAN-DIWA-Policy-Paper.pdf" download target="_blank"><strong>policy paper</strong></a>**.