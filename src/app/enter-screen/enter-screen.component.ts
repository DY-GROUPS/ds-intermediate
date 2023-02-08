import { Component, OnInit } from '@angular/core';
import { Interconnect, IMessageStream } from 'ng-interconnect';
import { IPopupConfigs, IPopupCpmmands, ISliderConfig } from 'src/app/ds-components/ds-types';
import { MainViews } from '../app.types';

@Component({
  selector: 'app-enter-screen',
  templateUrl: './enter-screen.component.html',
  styleUrls: ['./enter-screen.component.scss']
})
export class EnterScreenComponent implements OnInit {

  private changeView: IMessageStream | Promise<IMessageStream>;
  sliderData: ISliderConfig[];
  popupData: IPopupConfigs[];
  customPopupContents: IPopupConfigs[];
  dsRulesAndreg: IPopupConfigs;
  showDialogUI: boolean = false;
  currentPopopWindowIdx: number = 0;
  currentPopupPage: IPopupConfigs;
  showTearms: boolean = false;
  showPrivacyPolicy: boolean = false;
  showRulesAndReg: boolean = false;

  constructor(private interconnect: Interconnect) {

    this.changeView = interconnect.connectToListener('leftbar/changeView', 'topbar');
    if (this.changeView['then']) {
      this.changeView['then']((notifier) => this.changeView = notifier);
    }

  }

  ngOnInit(): void {

    this.sliderData = [
      {
        header: "Header 1",
        content: "Content 1",
        dotPeref: {
          color: 'rgba(237, 166, 115, 0.5)',
          defaultColor: 'rgba(237, 166, 115, 0.5)'
        }
      },
      {
        header: "Welcome to",
        header2: 'Our Auction Center',
        content: "This is where Auction Houses are posted by our administration team. When one room closes another one opens for our multi-room Houses. When a room is ready to close, it means that the room is full and the timer will be activated to conclude the bidding session. Any addtional rooms will open automatically with a 21 day timer until it conculdes.",
        dotPeref: {
          color: 'rgba(237, 166, 115, 0.5)',
          defaultColor: 'rgba(237, 166, 115, 0.5)'
        },
        default: true
      },
      {
        header: "Header 3",
        content: "Content 3.",
        dotPeref: {
          color: 'rgba(237, 166, 115, 0.5)',
          defaultColor: 'rgba(237, 166, 115, 0.5)'
        }
      }
    ]

    this.popupData = [
      {
        header: 'DreamStakes Rules & Regulation',
        contentHeader: 'DreamStakes Contract',
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tempus et lacus at maximus. Vivamus dignissim tincidunt turpis, eu lacinia justo tempor eu. Morbi aliquam nulla non porta tincidunt. Vivamus at ultricies enim, eget tempus quam. Etiam nisi felis, ultricies ut eros nec, accumsan luctus lectus. Donec justo enim, venenatis ac tellus quis, congue ultrices arcu. In feugiat nec dolor non vehicula. Proin id tincidunt erat.<br><br>
        Nullam consectetur interdum mollis. Morbi in lacus sapien. Vivamus aliquet massa sed lacus pretium lacinia. Maecenas quis leo sed tortor maximus eleifend. Sed sit amet facilisis neque. Proin tempus massa sit amet lorem sagittis, at ultricies quam auctor. Suspendisse quis nulla commodo, elementum felis vel, pellentesque justo. In mi sem, fringilla at fermentum at, vulputate suscipit sapien. Vivamus at tincidunt libero, id rutrum nulla. Curabitur auctor lectus sit amet ex imperdiet consequat. Donec tempor magna sapien, tempus ultricies neque ultricies sed.<br><br>
        Proin nec magna justo. Proin vel pretium enim, eget sollicitudin nisi. Proin mattis rutrum lorem ut consequat. Quisque eget magna ex. Proin vestibulum, metus eu dictum congue, lorem lectus ultricies enim, quis semper orci lacus sit amet dui. Pellentesque eget neque lobortis, tincidunt lectus eu, hendrerit orci. Etiam at risus tristique ante hendrerit consequat. Sed eleifend erat sed auctor blandit. Curabitur vehicula sapien bibendum odio malesuada, vitae egestas nunc dictum. Cras bibendum egestas neque. Donec imperdiet eget nisi ut semper. Sed eu tempor enim.<br><br>
        Duis magna sapien, malesuada sit amet felis eu, convallis rhoncus elit. Donec hendrerit urna non eros rutrum efficitur. Quisque a luctus diam. Sed vel laoreet odio. Cras accumsan tristique mauris et faucibus. Praesent sit amet dapibus dolor. Nam facilisis lacus at lectus volutpat imperdiet. Etiam tincidunt eros erat, id rutrum risus venenatis non. Aliquam ornare semper lacus at tempor. Suspendisse potenti. Curabitur tempus, nisi eget vehicula fermentum, justo tortor venenatis turpis, ac cursus nunc tortor eget augue. Duis finibus, arcu vel condimentum auctor, lectus eros placerat massa, ut facilisis odio lacus pulvinar tortor. Vivamus dictum vulputate fermentum. Integer vitae egestas mi. Etiam a tellus eu leo laoreet hendrerit.<br><br>
        Sed condimentum odio in dolor cursus consequat. Nam auctor suscipit nisi, sed egestas arcu bibendum nec. Nullam quis nibh sit amet massa interdum sollicitudin. Sed lorem nisi, iaculis placerat massa at, placerat semper sapien. Nulla dictum dapibus arcu ut condimentum. Vivamus at dapibus tellus. Duis ut augue maximus, mattis nisi ut, elementum enim. Maecenas sed aliquet lacus, eget condimentum nisi. Fusce suscipit consequat risus consequat scelerisque. Donec sodales, turpis nec scelerisque suscipit, magna ipsum eleifend magna, id aliquam sapien arcu quis urna. Cras vel mattis sapien. Etiam scelerisque venenatis fermentum. Donec at turpis a lorem vulputate sodales sed in tellus. Donec volutpat libero vitae gravida molestie. Ut sed ante neque.`,
        bckButton: false,
        nxtButton: true,
        showFooter: true
      },
      {
        header: 'DreamStakes Rules & Regulation',
        contentHeader: 'Non-Refundable $100 Entry Fee',
        content: ``,
        bckButton: true,
        nxtButton: true,
        customContents: 'agreement',
        showFooter: true
      },
      {
        header: 'DreamStakes Rules & Regulation',
        contentHeader: 'Choose Your Payment Method',
        content: ``,
        bckButton: true,
        nxtButton: false,
        customContents: 'payments',
        customFooterButton: 'submit',
        showFooter: true
      },
      
    ]

    this.customPopupContents = [
      {
        header: 'Terms and conditions',
        contentHeader: 'Terms and conditions ',
        content: `These Website Standard Terms and Conditions written on this webpage shall manage your use of our website, Dreamstakes.com accessible at www.dreamstakes.com.<br><br>
        These Terms will be applied fully and affect to your use of this Website. By using this Website, you agreed to accept all terms and conditions written in here. You must not use this Website if you disagree with any of these Website Standard Terms and Conditions. These Terms and Conditions have been generated with the help of the Terms And Conditiions Sample Generator.<br><br>
        Minors or people below 18 years old are not allowed to use this Website.<br><br>
        Your Privacy<br>
        Please read Privacy Policy.<br><br>
        No warranties<br>
        This Website is provided "as is," with all faults, and Dream stakes express no representations or warranties, of any kind related to this Website or the materials contained on this Website. Also, nothing contained on this Website shall be interpreted as advising you.<br><br>
        Limitation of liability<br>
        In no event shall Dream stakes, nor any of its officers, directors and employees, shall be held liable for anything arising out of or in any way connected with your use of this Website whether such liability is under contract.  Dream stakes, including its officers, directors and employees shall not be held liable for any indirect, consequential or special liability arising out of or in any way related to your use of this Website.<br><br>
        Indemnification<br>
        You hereby indemnify to the fullest extent Dream stakes from and against any and/or all liabilities, costs, demands, causes of action, damages and expenses arising in any way related to your breach of any of the provisions of these Terms.<br><br>
        Severability<br>
        If any provision of these Terms is found to be invalid under any applicable law, such provisions shall be deleted without affecting the remaining provisions herein.<br><br>
        Variation of Terms<br>
        Dream stakes is permitted to revise these Terms at any time as it sees fit, and by using this Website you are expected to review these Terms on a regular basis.<br><br>
        Assignment<br>
        The Dream stakes is allowed to assign, transfer, and subcontract its rights and/or obligations under these Terms without any notification. However, you are not allowed to assign, transfer, or subcontract any of your rights and/or obligations under these Terms.<br><br>
        Entire Agreement<br>
        These Terms constitute the entire agreement between Dream stakes and you in relation to your use of this Website, and supersede all prior agreements and understandings.<br><br>
        Governing Law & Jurisdiction<br>
        These Terms will be governed by and interpreted in accordance with the laws of the State of af, and you submit to the non-exclusive jurisdiction of the state and federal courts located in af for the resolution of any disputes.
        `,
        bckButton: false,
        nxtButton: false,
        showFooter: true
      },
      {
        header: 'Privacy Policy',
        contentHeader: 'Privacy Policy',
        content: `

          Last updated: 2020-11-06 11:35:26<br>

          We value your privacy very highly. Please read this Privacy Policy carefully before using the www.theloremipsumco.com Website (the "Website") operated by The Lorem Ipsum Company, a(n) Corporation formed in California, United States ("us," "we," "our") as this Privacy Policy contains important information regarding your privacy and how we may use the information we collect about you.
          <br>
          Your access to and use of the Website is conditional upon your acceptance of and compliance with this Privacy Policy. This Privacy Policy applies to everyone, including, but not limited to: visitors, users, and others, who wish to access or use the Website.
          <br>
          By accessing or using the Website, you agree to be bound by this Privacy Policy. If you disagree with any part of the Privacy Policy, then you do not have our permission to access or use the Website.
          <br>
          We collect any and all information that you enter on this Website. We collect the following information about you:
          <br>

          Category of information	Specific piece of information
          <ul>
            <li>Identifying information	Name</li>
            <li>Identifying information	Phone number</li>
            <li>Identifying information	IP address</li>
            <li>Identifying information	Email address</li>
            <li>Internet or other electronic activity	Browsing history</li>
            <li>Internet or other electronic activity	Search history</li>
            <li>Internet or other electronic activity	Information regarding your interaction with our website or application</li>
            <li>How we may use your information</li>
          </ul>
          <br>

          We may use the information that you provide us for the following:
          <ul>
            <li>Marketing and advertising;</li>
            <li>Participation in surveys and contests;</li>
            <li>Performing services;</li>
            <li>Providing customer service;</li>
            <li>Resolving disputes;</li>
            <li>Verifying customer information;</li>
            <li>Analytics.</li>
            <li>With whom we share your information</li>
          </ul>

          <br>

          We share your personal information with the following categories of third parties:
          <ul>
            <li>Content management systems;</li>
            <li>Customer management systems;</li>
            <li>Email marketing vendors;</li>
            <li>Parties that need to operate the website;</li>
            <li>Subsidiaries;</li>
            <li>Data analytics providers;</li>
            <li>Social networks.</li>
          </ul>
        `,
        bckButton: false,
        nxtButton: false,
        showFooter: true

      }
    ]

    this.dsRulesAndreg = {

      header: 'DreamStakes Rules & Regulation',
      contentHeader: 'CONDITIONS OF USE',
      content: `
        <b>A. YOUR ACCOUNT</b><br>
        To access certain services offered by the platform, we may require that you create an account with us or provide personal information to complete the creation of an account. We may at any time in our sole and absolute discretion, invalidate the username and/or password without giving any reason or prior notice and shall not be liable or responsible for any losses suffered by, caused by, arising out of, in connection with or by reason of such request or invalidation.
        <br>
        <br>
        You are responsible for maintaining the confidentiality of your user identification, password, account details and related private information. You agree to accept this responsibility and ensure your account and its related details are maintained securely at all times and all necessary steps are taken to prevent misuse of your account. You should inform us immediately if you have any reason to believe that your password has become known to anyone else, or if the password is being, or is likely to be, used in an unauthorized manner. You agree and acknowledge that any use of the Site and related services offered and/or any access to private information, data or communications using your account and password shall be deemed to be either performed by you or authorized by you as the case may be. You agree to be bound by any access of the Site and/or use of any services offered by the Site (whether such access or use are authorized by you or not). You agree that we shall be entitled (but not obliged) to act upon, rely on or hold you solely responsible and liable in respect thereof as if the same were carried out or transmitted by you. You further agree and acknowledge that you shall be bound by and agree to fully indemnify us against any and all losses arising from the use of or access to the Site through your account.
        <br>
        <br>
        Please ensure that the details you provide us with are correct and complete at all times. You are obligated to update details about your account in real time by accessing your account online. For pieces of information you are not able to update by accessing Your Account on the Site, you must inform us via our customer service communication channels to assist you with these changes. We reserve the right to refuse access to the Site, terminate accounts, remove or edit content at any time without prior notice to you. We may at any time in our sole and absolute discretion, request that you update your Personal Data or forthwith invalidate the account or related details without giving any reason or prior notice and shall not be liable or responsible for any losses suffered by or caused by you or arising out of or in connection with or by reason of such request or invalidation. You hereby agree to change your password from time to time and to keep your account secure and also shall be responsible for the confidentiality of your account and liable for any disclosure or use (whether such use is authorised or not) of the username and/or password.Back to Top
        <br>
        <br>
        <br>
        <br>
        <b>B. PRIVACY</b><br>
        Please review our Privacy Agreement, which also governs your visit to the Site. The personal information / data provided to us by you or your use of the Site will be treated as strictly confidential, in accordance with the Privacy Agreement and applicable laws and regulations. If you object to your information being transferred or used in the manner specified in the Privacy Agreement, please do not use the Site.Back to Top
        <br>
        <br>
        <br>
        <br>
        <b>C. PLATFORM FOR COMMUNICATION</b><br>
        You agree, understand and acknowledge that the Site is an online platform that enables you to purchase products listed at the price indicated therein at any time from any location using a payment method of your choice. You further agree and acknowledge that we are only a facilitator and cannot be a party to or control in any manner any transactions on the Site or on a payment gateway as made available to you by an independent service provider. Accordingly, the contract of sale of products on the Site shall be a strictly bipartite contract between you and the sellers on our Site while the payment processing occurs between you, the service provider and in case of prepayments with electronic cards your issuer bank. Accordingly, the contract of payment on the Site shall be strictly a bipartite contract between you and the service provider as listed on our Site. Back to Top
        <br>
        <br>
        <br>
        <br>
        <b>D. CONTINUED AVAILABILITY OF THE SITE</b><br>
        We will do our utmost to ensure that access to the Site is consistently available and is uninterrupted and error-free. However, due to the nature of the Internet and the nature of the Site, this cannot be guaranteed. Additionally, your access to the Site may also be occasionally suspended or restricted to allow for repairs, maintenance, or the introduction of new facilities or services at any time without prior notice. We will attempt to limit the frequency and duration of any such suspension or restriction.Back to Top
        <br>
        <br>
        <br>
        <br>
        <b>E. LICENSE TO ACCESS THE SITE</b><br>
        We require that by accessing the Site, you confirm that you can form legally binding contracts and therefore you confirm that you are at least 18 years of age or are accessing the Site under the supervision of a parent or legal guardian. We grant you a non-transferable, revocable and non-exclusive license to use the Site, in accordance with the Terms and Conditions described herein, for the purposes of shopping for personal items and services as listed to be sold on the Site. Commercial use or use on behalf of any third party is prohibited, except as explicitly permitted by us in advance. If you are registering as a business entity, you represent that you have the authority to bind that entity to this User Agreement and that you and the business entity will comply with all applicable laws relating to online trading. No person or business entity may register as a member of the Site more than once. Any breach of these Terms and Conditions shall result in the immediate revocation of the license granted in this paragraph without notice to you.
        <br>
        <br>
        Content provided on this Site is solely for informational purposes. Product representations including price, available stock, features, add-ons and any other details as expressed on this Site are the responsibility of the vendors displaying them and is not guaranteed as completely accurate by us. Submissions or opinions expressed on this Site are those of the individual(s) posting such content and may not reflect our opinions.
        <br>
        <br>
        We grant you a limited license to access and make personal use of this Site, but not to download (excluding page caches) or modify the Site or any portion of it in any manner. This license does not include any resale or commercial use of this Site or its contents; any collection and use of any product listings, descriptions, or prices; any derivative use of this Site or its contents; any downloading or copying of account information for the benefit of another seller; or any use of data mining, robots, or similar data gathering and extraction tools.
        <br>
        <br>
        This Site or any portion of it (including but not limited to any copyrighted material, trademarks, or other proprietary information) may not be reproduced, duplicated, copied, sold, resold, visited, distributed or otherwise exploited for any commercial purpose without express written consent by us as may be applicable.
        <br>
        <br>
        You may not frame or use framing techniques to enclose any trademark, logo, or other proprietary information (including images, text, page layout, or form) without our express written consent. You may not use any meta tags or any other text utilizing our name or trademark without our express written consent, as applicable. Any unauthorized use terminates the permission or license granted by us to you for access to the Site with no prior notice. You may not use our logo or other proprietary graphic or trademark as part of an external link for commercial or other purposes without our express written consent, as may be applicable.
        <br>
        <br>
        You agree and undertake not to perform restricted activities listed within this section; undertaking these activities will result in an immediate cancellation of your account, services, reviews, orders or any existing incomplete transaction with us and in severe cases may also result in legal action.
        <br>
        <br>
        <br>
        <b>F. YOUR CONDUCT</b><br>
        You must not use the website in any way that causes, or is likely to cause, the Site or access to it to be interrupted, damaged or impaired in any way. You must not engage in activities that could harm or potentially harm the Site, its employees, officers, representatives, stakeholders or any other party directly or indirectly associated with the Site or access to it to be interrupted, damaged or impaired in any way. You understand that you, and not us, are responsible for all electronic communications and content sent from your computer to us and you must use the Site for lawful purposes only. You are strictly prohibited from using the Site for;
        <br>
        <br>
        i. fraudulent purposes, or in connection with a criminal offense or other unlawful activity to send, use or reuse any material that does not belong to you; or is illegal, offensive (including but not limited to material that is sexually explicit content or which promotes racism, bigotry, hatred or physical harm), deceptive, misleading, abusive, indecent, harassing, blasphemous, defamatory, libellous, obscene, pornographic, paedophilic or menacing; ethnically objectionable, disparaging or in breach of copyright, trademark, confidentiality, privacy or any other proprietary information or right; or is otherwise injurious to third parties; or relates to or promotes money laundering or gambling; or is harmful to minors in any way; or impersonates another person; or threatens the unity, integrity, security or sovereignty of Sri Lanka or friendly relations with foreign States; or objectionable or otherwise unlawful in any manner whatsoever; or which consists of or contains software viruses, political campaigning, commercial solicitation, chain letters, mass mailings or any "spam” Use the Site for illegal purposes.
        <br>
        <br>
        iii. To cause annoyance, inconvenience or needless anxiety.
        <br>
        <br>
        iii. for any other purposes that is other than what is intended by us.
        <br>
        <br>
        <br>
        <br>
        <b>G. YOUR SUBMISSION</b><br>
        Anything that you submit to the Site and/or provide to us, including but not limited to, questions, reviews, comments, and suggestions (collectively, "Submissions") will become our sole and exclusive property and shall not be returned to you. In addition to the rights applicable to any Submission, when you post comments or reviews to the Site, you also grant us the right to use the name that you submit, in connection with such review, comment, or other content. You shall not use a false e-mail address, pretend to be someone other than yourself or otherwise mislead us or third parties as to the origin of any Submissions. We may, but shall not be obligated to, remove or edit any Submissions without any notice or legal course applicable to us in this regard.

      `,
      bckButton: false,
      nxtButton: false,
      showFooter: false
      
    }

    this.currentPopupPage = this.popupData[this.currentPopopWindowIdx];

  }

  showDialog(){
    this.showDialogUI = true;
  }

  recieveFromPopupDialog(e){
    
    switch(e.command){

      case IPopupCpmmands.close:

        this.showRulesAndReg = false;

        if(!e.customCommand){
          this.currentPopopWindowIdx = 0;
          this.showDialogUI = false; 
        }
        else{

          if(e.customCommand === 'closeTearms'){
            this.showTearms = false;
          }
          else{
            this.showPrivacyPolicy = false;
          }
        }


      break;
      case IPopupCpmmands.next: this.currentPopopWindowIdx++; break;
      case IPopupCpmmands.back: this.currentPopopWindowIdx--; break;
      case IPopupCpmmands.showTearms: this.showTearms = true; break;
      case IPopupCpmmands.showPrivacyPolicy: this.showPrivacyPolicy = true; break;
      case IPopupCpmmands.submit:
        this.currentPopopWindowIdx = 0;
        this.showDialogUI = false;
        this.showdasboard();
      break;

    }

    if(e.command !== IPopupCpmmands.showTearms || e.command !== IPopupCpmmands.showPrivacyPolicy)
      this.currentPopupPage = this.popupData[this.currentPopopWindowIdx];
    

  }

  showdasboard(){
    (this.changeView as IMessageStream).emit({viewId: MainViews.dashboard, showBackground: true, showCards:false});
  }

}
