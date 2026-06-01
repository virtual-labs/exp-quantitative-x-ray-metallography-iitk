<b>Electron Probe Microanalyzer (EPMA): </b> <br>
An Electron Probe Microanalyzer (EPMA) is an electron beam instrument primarily used for the in situ chemical examination of solid materials. The electron optics of EPMA allow for much higher resolution compared to visible-light lenses, enabling a spot size of a few microns. This high resolution makes EPMA a powerful tool for material analysis.<br>

EPMA can be equipped with a variety of detectors, including :<br>
•	Wavelength Dispersive Spectrometers (WDS)<br>
•	Energy Dispersive Spectroscopy (EDS)<br>
•	Secondary Electron Detectors<br>
•	Backscattered Electron Detectors<br>

A schematic of EPMA is shown in Figure 1.<br><br>
<image src="images\img_1.png"><br>

<b>Electron Beam Interaction in EPMA :</b> <br>
Electrons from the electron source (such as LaB₆ or Field Emission Gun) are accelerated and focused onto the sample using a series of electromagnetic lenses. The interaction of the electron beam with the sample results in several effects :<br>
•	Secondary Electrons (SEs):  Used for imaging surface morphology. <br>
•	Backscattered Electrons (BSEs):  Used for compositional contrast imaging.<br>
•	Cathodoluminescence (CL):  Provides information on electronic structure.<br>
•	Continuum X-ray Radiation:  Background radiation generated during interaction.<br>
•	Characteristic X-ray Radiation:  Used for elemental analysis.<br>
•	Auger Electrons:  Used for surface chemistry analysis.<br>

Among these, characteristic X-rays are particularly useful for chemical analysis since each element has a unique inner electron structure, which serves as a fingerprint for elemental identification. Characteristic X-rays are emitted when an inner shell electron (e.g., K-shell) is ejected and an outer electron (e.g., L-shell) fills the vacancy. The energy difference results in X-ray emission, classified into different X-ray lines :<br>

•	Kα, Kβ (for K-shell transitions)<br>
•	Lα, Lβ (for L-shell transitions)<br>
•	Mα, Mβ (for M-shell transitions)<br>

However, in multi-element materials, X-ray peaks can overlap due to Close energy values of different X-ray lines and it is predominant in High atomic number (Z) elements, exhibiting multiple emissions. This issue is more prominent in EDS, where energy resolution is lower. WDS provides a solution by using crystal diffraction, offering higher resolution and reducing peak overlap. The X-rays emitted from the sample are counted either by EDS or WDS detector. <br>

<b>Wavelength Dispersive Spectrometry (WDS) and Rowland Circle: </b> <br>
The key advantage of EPMA over SEM is the use of Wavelength Dispersive Spectrometer (WDS), which provides higher spectral resolution compared to EDS. In WDS, X-rays emitted from the sample interact with a diffracting crystal of known d-spacing, which selectively diffracts X-rays of specific wavelengths (λ), and these diffracted X-rays are collected by a detector. To ensure proper detection of X-rays, all three components (sample, diffracting crystal and detector) are placed in a specific geometry known as Rowland Circle.<br>

The Rowland Circle is a fundamental concept in WDS, where the sample, diffracting crystal, and detector are positioned on a curved geometric arrangement to ensure the distance between the sample and diffracting crystal, and diffracting crystal and detector, which results in only X-rays satisfying Bragg’s Law are detected. This technique enhances spectral resolution and reduces peak overlap, making WDS superior for precise compositional analysis. <br>
Figure 2 illustrates this setup and table 1 shows Comparison of EDS and WDS.<br>
<image src="images\img_2.png"><br><br>

<b>Table 1. Comparison of EDS and WDS : </b><br>

| Feature                        | Energy Dispersive Spectroscopy (EDS)   | Wavelength Dispersive Spectroscopy (WDS) |
|---------------------------------|----------------------------------------|-----------------------------------------|
| **Resolution**                  | Energy dependent (130 eV)              | Crystal dependent (~ 5 eV)             |
| **Detection Limit**             | ~ 0.1 wt%                              | ~ 0.01 wt%                             |
| **Speed**                       | Faster (few minutes)                  | Slower (tens of minutes)               |
| **Elemental Sensitivity**      | Less sensitive to trace elements       | More sensitive to trace elements       |
| **Peak Overlap**               | Higher                                 | Lower due to better spectral resolution|
| **Quantification Accuracy**    | Moderate                               | High due to fewer matrix effects       |

<br>
<b>Quantitative Analysis and ZAF (Matrix) Corrections: </b> <br>
Quantitative X-ray microanalysis aims to determine the composition of a sample by measuring the intensity of characteristic X-ray emissions. The X-rays detected are used to generate a spectrum, which is compared with reference spectra to determine the chemical composition However, direct intensity measurements must be corrected for matrix effects, which include atomic number effects (Z), absorption (A), and fluorescence (F), also known as ZAF correction.<br>

•	Penetration factor (Z): Accounts for electron backscattering (R) and stopping power (S)<br>
•	Absorption (A): Considers X-ray attenuation within the sample.<br>
•	Secondary fluorescence (F): Corrects for additional X-ray emissions caused by one element exciting another.<br>

Finally, the gathered chemical data is interpreted within a textural context. An example of a high-entropy ceramic analysis is shown in Figure 3.<br>

<image src="images\Picture2.png"> <br>

Fig 3. Electron probe microanalysis (EPMA) results of the sintered pellet of TiZrNbCrBC ceramic a) BSE image b) B, c) C, d) Cr, e) Nb, f) Ti, and g) Zr.


























<!-- An Electron probe microanalysis is an electron beam instrument, most often used for the in situ chemical examination of solid materials. The electron optics of EPMA, enable the examination of materials with far better resolution than those obtainable with visible-light lenses with a spot size of a few microns. These characteristics of EPMA allow for the employment of a variety of detectors, including wavelength dispersive spectrometers, secondary electron detectors, backscattered electron detectors, and other detector types and the schematic of EPMA is shown in figure 1.
<br>

<image src="images\Picture1.png">
<br>

Electrons that emerge from the electron source (LaB6, Field emission gun.,) are accelerated and rectified via a series of electromagnetic lenses, focused onto the sample. The interaction of the electron beam with the sample creates various effects such as secondary electrons, backscattered electrons, cathodoluminescence, continuum X-ray radiation, characteristic X-ray radiation, and Auger electrons. The main advantage of EPMA over conventional SEM is, that it is equipped with crystal spectrometers which provide fine compositional analysis compared to EDS. Each element has its characteristic inner electron structure which behaves as fingerprints of that element and also the x-rays produced are from the inner electron structure there is not much effect from the bonding of elements. The X-rays emitted from the sample are counted either by EDS or WDS detector, in WDS the crystal of known d spacing is used to diffract specific X-rays with characteristic “λ ” and the x-rays are counted by a detector, the sample, diffracting crystal and detector are placed on a goniometer, shown in figure 2. Depending upon the element concentration to be analysed different types of diffracting crystals are used. The Typical analyzing crystals that are used in a spectrometer are as follows. (1) Small lattice spacing: lithium fluoride (LiF(200) ), spacing: 0.4 nm,  has an element range from Ca to Ge, (2) Medium lattice spacing: pentaerythritol (PET(002)), spacing: 0.87 nm, has element range from Si to Ti, and (3) Large spacing: thallium acid phthalate (TAP(100)), spacing: 2.6 nm, has element range from O to Al, and LSM80E with 2d spacing 7.8nm has element range from B to O.   The X-rays diffracted are collected by CCD detector. The detector generate spectrum from X-rays that are diffracted from crystals, which is then compared with the reference spectra. Chemical composition is estimated by comparing the generated spectra from the sample with standard spectra of known composition. Counts from the sample must be corrected for matrix effects (penetration factor, absorption, and secondary fluorescence) to yield quantitative chemical compositions. At last, the chemical data is gathered in a textural context, and one measurement of high entropy ceramics is shown in Figure 3.
<br>

<image src="images\Picture2.png">

Fig 3. Electron probe microanalysis (EPMA) results of the sintered pellet of TiZrNbCrBC ceramic a) BSE image b) B, c) C, d) Cr, e) Nb, f) Ti, and g) Zr.-->






