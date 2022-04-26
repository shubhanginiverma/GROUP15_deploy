import React from "react"
import Image from "../components/Images/Images"
import Layout from "../components/Layout/Layout"

const Women = () => {
  return (
    <Layout>
      <div className="container py-5">
        <h1 className="pb-2  text-center text-dark">
           WOMEN'S HEALTH
        </h1>
        <h3 className="pb-2  text-center text-underline ">
          Trusted comprehensive health information and resources for women
        </h3>
      </div>

      <div className="container py-5">
        <h2 className="pb-2 border-bottom text-center">FITNESS CHALLENGES</h2>

        <div className="row">
          <div className="col-lg-4">
            <div class="card text-white bg-info mb-3">
              {/* <div class="card-header">Header</div> */}
              <div class="card-body">
                <h3 class="card-title">30-Days Fitness Challenges</h3>
                <div class="col-auto d-none d-lg-block">
                  <Image
                    className="m-2"
                    style={{
                      height: "220px",
                      width: "320px",
                      borderRadius: "10px",
                    }}
                    filename="workout1.jpg"
                    alt="1"
                  />
                </div>
                <p class="card-text">
                  <b>Sticking to a fitness routine is all about finding a workout
                  you love, whether that's running, yoga, strength training, or
                  walking.</b>
                </p>
                <p>
                  <b>Do one exercise each day, except on your mindfulness rest day.
                  For each exercise, you'll work for 30 seconds (per side, if
                  applicable), then take a 30 second rest. Continue for five
                  rounds, or five to 7.5 minutes total. Some tips are -</b>
                </p>
                <p>
                  <b>1. Work out in the morning.</b>
                </p>
                <p>
                  <b>2. Don't overdo it with weight.</b>
                </p>
                <p>
                  <b>3. Get creative with cross-training.</b>
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div class="card bg-light mb-3">
              {/* <div class="card-header">Header</div> */}
              <div class="card-body">
                <h3 class="card-title">Healthy Diet</h3>
                <div class="col-auto d-none d-lg-block">
                  <Image
                    className="m-2"
                    style={{
                      height: "220px",
                      width: "320px",
                      borderRadius: "10px",
                    }}
                    filename="healthy diet.jpg"
                    alt="1"
                  />
                </div>
                <p class="card-text"><b>A healthy eating plan:</b></p>
                <p><b>1. Emphasizes vegetables, fruits, whole grains, and fat-free or
                  low-fat dairy products.</b></p>
                <p><b>2. Includes lean meats, poultry, fish, beans, eggs, and nuts.</b></p>
                <p><b>3. Limits saturated and trans fats, sodium, and added sugars.</b></p>
                {/* <p><b>4. Controls portion sizes.</b></p> */}
                <p><b>5. Try to choose a variety of different foods from the 5 main food groups to get a wide range of nutrients.</b></p>
                <p><b>6. Go for lower fat and lower sugar products where possible.</b></p>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div class="card text-white bg-info mb-3">
              {/* <div class="card-header">Header</div> */}
              <div class="card-body">
                <h3 class="card-title">Meditation</h3>
                <div class="col-auto d-none d-lg-block">
                  <Image
                    className="m-2"
                    style={{
                      height: "220px",
                      width: "320px",
                      borderRadius: "10px",
                    }}
                    filename="meditation.jpg"
                    alt="1"
                  />
                </div>
                <p class="card-text">
                  <b>The Five Stages of Meditation Practice from Beginners to
                  Advanced</b>
                </p>
                <p><b>Stage 1: Balancing the gross body-mind.</b></p>
                <p><b>Stage 2: Balancing and activating the subtle body-mind.</b></p>
                <p><b>Stage 3: Recognizing and resting in the formless-timeless
                  dimension of existence.</b></p>
                <p><b>Stage 4: Developing ones inner-world communication skills.</b></p>
                <p><b>Stage 5: Developing and integrating a non-dual experience of
                  stages 1-4.</b></p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <h2 className="pb-2 border-bottom text-center">MENSTRUATION</h2>

        <div className="row">
          <div className="col-lg-4">
            <div class="card bg-light mb-3">
              <h3 class="card-header">
                Stomach Pains
              </h3>
              <div class="card-body">
                <div class="col-auto d-none d-lg-block">
                  <Image
                    className="m-2"
                    style={{
                      height: "220px",
                      width: "320px",
                      borderRadius: "10px",
                    }}
                    filename="cramp.jpg"
                    alt="1"
                  />
                </div>
                {/* <h5 class="card-title">Special title treatment</h5>
              <h6 class="card-subtitle text-muted">Support card subtitle</h6> */}
              </div>

              <div class="card-body">
                <p class="card-text">
                  Besides bloating, moodiness, and sudden sugar cravings, cramps
                  are one of the most common signs that your time of the month
                  is coming soon. While not very fun, they are at least reliable
                  indicators of when you need to have your pads, tampons, or
                  menstrual cups ready. Lots of women get pelvic pain and
                  cramping, but your period isn't always to blame. Cysts,
                  constipation, pregnancy -- even cancer -- can make it feel
                  like your monthly visitor is about to stop by. It can be tough
                  to tell whether having cramps without a period is caused by
                  something simple or more serious.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div class="card bg-info mb-3">
              <h3 class="card-header">To Get Rid of Period Bloating</h3>
              <div class="card-body">
                {/* <h5 class="card-title">Special title treatment</h5>
              <h6 class="card-subtitle text-muted">Support card subtitle</h6> */}
              </div>
              <div class="col-auto d-none d-lg-block">
                <Image
                  className="m-2"
                  style={{
                    height: "220px",
                    width: "320px",
                    borderRadius: "10px",
                  }}
                  filename="bloating.jpg"
                  alt="1"
                />
              </div>
              <div class="card-body">
                <p class="card-text">
                  <p>
                    Bloating generally occurs well before your period starts and
                    will go away once you’ve been menstruating for a few days.
                    You may not be able to prevent bloating completely, but
                    there are some home-based treatments you can try to reduce
                    it. Here are some ways to reduce period bloating:
                  </p>
                  1. Pick protein- and potassium-rich foods.
                </p>
                <p>2. Stay away from foods that cause gas.</p>
                <p>3. Don't skip your workout routine.</p>
                <p>4. Cut back on caffeine and alcohol (just for now).</p>-
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div class="card bg-light mb-3">
              <h3 class="card-header">Diarrhea on your Periods</h3>
              <div class="card-body">
                {/* <h5 class="card-title">Special title treatment</h5>
              <h6 class="card-subtitle text-muted">Support card subtitle</h6> */}
              </div>
              <div class="col-auto d-none d-lg-block">
                <Image
                  className="m-2"
                  style={{
                    height: "220px",
                    width: "320px",
                    borderRadius: "10px",
                  }}
                  filename="diarrhea.jpg"
                  alt="1"
                />
              </div>
              <div class="card-body">
                <p class="card-text">
                  If you’ve been having GI symptoms like cramping, bloating,
                  gas, diarrhea, and constipation that get worse during your
                  period, you could have a gastrointestinal condition like
                  irritable bowel syndrome (IBS) or inflammatory bowel disease
                  (IBD), so you’ll want to ask about visiting a specialist. If
                  your period triggers bloody diarrhea or abdominal pain so bad
                  that you can't eat, you may have endometriosis, a condition
                  where the cells that line your uterus pop up elsewhere, and
                  you should definitely see an ob-gyn for a checkup.Examples
                  include a liquid diet, food intolerance, stress, anxiety or
                  use of laxatives.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container py-5">
          <h2 className="pb-2 border-bottom text-center">BIRTH CONTROL</h2>

          <div className="row">
            <div className="col-lg-4">
              <div class="card text-white bg-info mb-3">
                {/* <div class="card-header">Header</div> */}
                <div class="card-body">
                  <h4 class="card-title">Symptoms when you quit the pill-</h4>
                  <div class="col-auto d-none d-lg-block">
                    <Image
                      className="m-2"
                      style={{
                        height: "220px",
                        width: "320px",
                        borderRadius: "10px",
                      }}
                      filename="pill.jpg"
                      alt="1"
                    />
                  </div>
                  <p class="card-text">1. You might get some pimples.</p>
                  <p>2. You might feel more aroused.</p>
                  <p>3. Your period cycle will change.</p>
                  <p>4. You might gain or lose weight.</p>
                  <p>5. You might get fewer headaches.</p>
                  <p>6.It could take a while to get your natural period cycle back.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div class="card text-black bg-light mb-3">
                {/* <div class="card-header">Header</div> */}
                <div class="card-body">
                  <h4 class="card-title">
                    Does Birth Control Really Help Acne?
                  </h4>
                  <div class="col-auto d-none d-lg-block">
                    <Image
                      className="m-2"
                      style={{
                        height: "220px",
                        width: "320px",
                        borderRadius: "10px",
                      }}
                      filename="acne.jpg"
                      alt="1"
                    />
                  </div>
                  <p class="card-text">
                    “There are definite links between acne and hormones during
                    all phases of a woman’s life, from the teen years to
                    pregnancy and even perimenopause,”
                  </p>
                  <p>
                    Yes, According to Masterson, several studies show links
                    between certain kinds of birth control and a decrease in
                    acne—so much so that some birth control pills have actually
                    gone to the FDA to petition to be approved for use as an
                    acne treatment.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div class="card text-white bg-info mb-3">
                {/* <div class="card-header">Header</div> */}
                <div class="card-body">
                  <h4 class="card-title"> You Need To Know About IUD </h4>
                  <div class="col-auto d-none d-lg-block">
                    <Image
                      className="m-2"
                      style={{
                        height: "220px",
                        width: "320px",
                        borderRadius: "10px",
                      }}
                      filename="iud.jpg"
                      alt="1"
                    />
                  </div>
                  <p class="card-text">
                    Birth control is pretty damn important to lots of women—and,
                    frankly, the easier it is to use, the better. Sure, the Pill
                    is fine and the ring gets the job done, but when you want
                    some real, pregnancy-prevention staying power, it's time to
                    bring out the big guns: IUDs
                  </p>
                  <p>
                    Intrauterine devices (IUDs) fall under the category of
                    long-acting reversible contraceptives. This means that they
                    prevent pregnancy for years but can be removed to restore
                    fertility.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container py-5">
          <h2 className="pb-2 border-bottom text-center">PREGNANCY</h2>

          <div className="row">
            <div className="col-lg-4">
              <div class="card bg-white text-black mb-3">
                {/* <div class="card-header">Header</div> */}
                <div class="card-body">
                  <h4 class="card-title">Getting Pregnant</h4>
                  <div class="col-auto d-none d-lg-block">
                    <Image
                      className="m-2"
                      style={{
                        height: "220px",
                        width: "320px",
                        borderRadius: "10px",
                      }}
                      filename="pregnent.jpg"
                      alt="1"
                    />
                  </div>
                  <p class="card-text">
                    <b>You're going to have a baby! it is important to:</b>
                  </p>
                  <p><b>1. Have regular visits with your health care provider.</b></p>
                  <p><b>2. Eat healthy and drink plenty of water.</b></p>
                  <p><b>3. Take prenatal vitamins.</b></p>
                  <p><b>4. Be careful with medicines and stay active.</b></p>
                  <p><b>5. Avoid substances that could hurt your baby, such as
                    alcohol, drugs, and tobacco.</b></p>
                  <p><b>6. Educate yourself and track your weight gain (normal weight gain is 25-35 pounds)</b></p>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div class="card text-white bg-info mb-3">
                {/* <div class="card-header">Header</div> */}
                <div class="card-body">
                  <h4 class="card-title">Abortion Risk Factors</h4>
                  <div class="col-auto d-none d-lg-block">
                    <Image
                      className="m-2"
                      style={{
                        height: "220px",
                        width: "320px",
                        borderRadius: "10px",
                      }}
                      filename="abortion.jpg"
                      alt="1"
                    />
                  </div>
                  <p class="card-text">
                    <b>There are always precipitating factors for every condition.
                    Here are the risk factors that concerns abortion:</b>
                  </p>
                  <p>
                    <b>1. Congenital Structural Defect - This structural defect may
                    be due to chromosomal aberration or a serious physical
                    defect.</b>
                  </p>
                  <p>
                    <b>2. Infection - In infection, the fetus would fail to grow and
                    estrogen and progesterone production would fall.</b>
                  </p>
                  <p>
                    <b>3.Smoking, alcohol and illicit drugs. - There are drugs which are contraindicated for
                     pregnant women. Heavy alcohol use and illicit drug use also increase the risk of miscarriage.</b>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div class="card bg-white text-black mb-3">
                {/* <div class="card-header">Header</div> */}
                <div class="card-body">
                  <h4 class="card-title">Miscarriage Prevention</h4>
                  <div class="col-auto d-none d-lg-block">
                    <Image
                      className="m-2"
                      style={{
                        height: "220px",
                        width: "320px",
                        borderRadius: "10px",
                      }}
                      filename="miscarriage.jpg"
                      alt="1"
                    />
                  </div>
                  <p class="card-text">
                    <b>One step you can take is to get as healthy as you can before
                    you try to have a baby:</b>
                  </p>
                  <p><b>1.Get regular exercise.</b></p>
                  <p><b>2.Get regular exercise.</b></p>
                  <p><b>3.Maintain a healthy weight.</b></p>
                  <p><b>4.Avoid infections.</b></p>
                  <p><b>5.Don’t smoke, drink alcohol, or take illegal drugs.</b></p>
                  <p><b>6.Make sure you are up to date on immunizations and Avoid
                    stress.</b>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container py-5 ">
          <h2 className="pb-2 border-bottom text-center">MENTAL HEALTH</h2>
          <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div class="col p-4 d-flex flex-column position-static  bg-secondary">
              <div class="col-auto d-none d-lg-block">
                <Image
                  className="m-2"
                  style={{
                    height: "220px",
                    width: "320px",
                    borderRadius: "10px",
                  }}
                  filename="mental health.jpg"
                  alt="1"
                />
              </div>
              <b>
                Breathing exercises can help with lowering your overall stress
                and anxiety levels and preventing them from spiking. The key is
                to practice them regularly, not just when you're experiencing an
                anxious moment. If your temp rises when you get anxious, you
                might want to consider a breathing technique that can bring it
                back down. Straw breathing is one of those practices brings
                about a cooling sensation through the mouth. If you’re in need
                of some serious tension relief, try the cocoon breath . This
                technique gives people a sense of “privacy, boundaries, and deep
                exhalation,” so it’s great for when you’re feeling that you need
                a moment to yourself to regroup. And remember to reach out to a professional.
                YOU GOT THIS !
              </b>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Women
