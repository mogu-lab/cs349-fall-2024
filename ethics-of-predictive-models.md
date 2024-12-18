# The Ethics of Predictive Models in Sociotechnical Systems

**Contexts:** So far, we've focused on gaining intuition for qualitative metrics of model performance. We've seen that no single metric can paint a full picture of a model's fit. And that multiple metrics can provide contradictory information---a model can be "good" according to one metric by "bad" according to another. Most importantly, we've seen that no metric can be meaningful without its context---in some contexts, false negatives are more tolerable than false positives, and in others, it's the opposite. 

However, our analysis of ML models *should not stop here*. For us to responsibly develop and use ML (or any technological system), it's our responsibility not just to think about the technology, but also about their *sociotechnical context*---the technology, data, model, users, affected communities, legal frameworks, business incentives, etc. that it will shape (or that will be shaped by its use):

<div class="canva-centered-embedding">
  <div class="canva-iframe-container" style="max-width: none;">
    <iframe loading="lazy" class="canva-iframe"
      src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAGNeSJW7Mk&#x2F;rP-g5in9AGP2MJmrOydpqw&#x2F;view?embed">
    </iframe>
  </div>
</div>

**Challenge:** What should we consider when evaluating an ML system in its sociotechnical context? There are many facets to consider. We will now introduce a framework for conducting a *broader impact analysis*. This framework can serve as a starting point for thinking about ML in sociotechnical contexts. 

**Outline:**
* Introduce the broader impact analysis framework
* Perform a broader impact analysis on case studies
* The need for explainable AI


## Broader Impact Analysis

**Part A: Assessing Impact.** 
1. Identify the stakeholders and context:
    * Who are the users?
    * Who are the affected communities (are these just the users)?
    * What is the relationship between the users and the affected communities? What are the power structures that relate users to affected communities?
    * What is the historical/cultural context of the type of task your tech performs (i.e. what is the relationship between what you are trying to accomplish, with respect to the users and affected communities, and the historical experience of these groups of people with past technologies that aimed to accomplish similar tasks)?
2. What are the potential benefits of your technology?
    * What kinds of needs do your users/communities have?
    * What kinds of constraints do your users/communities have?
    * How does your tech serve these needs?
3. What are the potential harms of your technology?
    * What kinds of side-effects and failures can your tech have? Does your tech increase or decrease the self-determination and agency of the users and affected communities?
    * What kinds of direct harm can these side-effects/failures cause?
    * What kinds of harm can the tech cause when embedded in the intended socio-technical system (trace out the effects through the web of relationships between stakeholders)?
  

**Part B: Responsibility.**
1. What are the ethical obligations of individual engineers?
    * What are your own ethical professional obligations in this project?
    * What design choices are dictated by your boss vs. what design choices do you make? 
    * To what extent are you (personally) ethically responsible for the impact of your company’s design decisions?
2. How much due diligence checking for harm should you do? 
    * How can you resolve conflicts of interest?
    * What are your obligations in situations where your assigned task works against the public interest?
    * What do you do if the interest of your users conflicts with the public interest?


**Part C: Inclusion, Diversity, and Participation.**
1. Inclusive design with diverse perspectives:
    * Do you personally understand the social (non-technical) dimensions of the potential impact of your tech? 
    * Has your product team, manager or company researched the social (non-technical) dimensions of the potential impact of your tech?
    * Are the values and perspectives of your users/affected communities meaningfully reflected throughout the development process (from design to evaluation)? 
2. Engage with affected communities:
    * Did you consult with domain experts, typical users, or representative community members in the inception, development, and deployment of the project?
    * Through what mechanisms can your domain experts, users/affected communities provide feedback during your inception, development, and deployment processes? If these mechanisms exist, what barriers may stop you from getting feedback?
    * How do you resolve conflicts of visions (e.g. between community members, between designers, between designer and user)?


````{admonition} Exercise: Conducting a Broader Impact Analysis
Choose one of the following articles:
1. [What happens when an algorithm cuts your health care](https://www.theverge.com/2018/3/21/17144260/healthcare-medicaid-algorithm-arkansas-cerebral-palsy)
2. [Dissecting racial bias in an algorithm used to manage the health of populations](https://www.science.org/doi/10.1126/science.aax2342)
3. [Rooting Out AI’s Biases](https://magazine.publichealth.jhu.edu/2023/rooting-out-ais-biases)

For the article you chose, imagine you are the engineer who developed the technology. Conduct a broader impact analysis. 
````

**Acknowledgements.** This framework was adapted from Weiwei Pan's offering of [AM207](https://onefishy.github.io/am207/) at Harvard.


## The need for Explainable AI (XAI)

````{admonition} Exercise: Explainable AI (XAI)
Read, *[Explainability for artificial intelligence
in healthcare: a multidisciplinary perspective](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7706019/pdf/12911_2020_Article_1332.pdf)*.
* What's the technological perspective?
* The legal perspective?
* The medical perspective?
* The patient's perspective?
* The ethical perspective?
* The paper argues that "omitting explainability in clinical decision support systems poses a threat to core ethical values in medicine and may have detrimental consequences for individual and public health." In your opinion, does XAI fix these issues?
````


