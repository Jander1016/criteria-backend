-- CreateTable
CREATE TABLE "answers" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "description" VARCHAR(500) NOT NULL,
    "shipped_date" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "score" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "question_id" UUID NOT NULL,
    "typeanswer_id" UUID NOT NULL,

    CONSTRAINT "answers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "areas" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "name" VARCHAR(100) NOT NULL,
    "description" VARCHAR(500) NOT NULL,
    "active" BOOLEAN DEFAULT true,

    CONSTRAINT "areas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "departments" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "name" VARCHAR(100) NOT NULL,
    "active" BOOLEAN DEFAULT true,

    CONSTRAINT "departments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "questions" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "description" VARCHAR(600) NOT NULL,
    "survey_id" UUID NOT NULL,
    "area_id" UUID NOT NULL,

    CONSTRAINT "questions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "results" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "result" VARCHAR(100) NOT NULL,
    "description" VARCHAR(600) NOT NULL,
    "result_date" TIMESTAMP(6),
    "survey_id" UUID NOT NULL,

    CONSTRAINT "results_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "surveys" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "description" VARCHAR(500) NOT NULL,
    "create_date" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "deadline" TIMESTAMP(6),
    "active" BOOLEAN NOT NULL DEFAULT true,
    "user_id" UUID NOT NULL,
    "name" VARCHAR(200),

    CONSTRAINT "surveys_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "types_answers" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "type" VARCHAR(100) NOT NULL,
    "description" VARCHAR(500) NOT NULL,
    "active" BOOLEAN DEFAULT true,

    CONSTRAINT "types_answers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "email" VARCHAR(100) NOT NULL,
    "password" VARCHAR(200) NOT NULL,
    "name" VARCHAR(200) NOT NULL,
    "job_title" VARCHAR(100) NOT NULL,
    "role" BOOLEAN NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "department_id" UUID NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users_surveys" (
    "active" BOOLEAN NOT NULL DEFAULT true,
    "user_id" UUID NOT NULL,
    "survey_id" UUID NOT NULL,

    CONSTRAINT "users_surveys_pkey" PRIMARY KEY ("user_id","survey_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "answers" ADD CONSTRAINT "answers_question_id_fkey" FOREIGN KEY ("question_id") REFERENCES "questions"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "answers" ADD CONSTRAINT "answers_typeanswer_id_fkey" FOREIGN KEY ("typeanswer_id") REFERENCES "types_answers"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "questions" ADD CONSTRAINT "questions_area_id_fkey" FOREIGN KEY ("area_id") REFERENCES "areas"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "questions" ADD CONSTRAINT "questions_survey_id_fkey" FOREIGN KEY ("survey_id") REFERENCES "surveys"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "results" ADD CONSTRAINT "results_survey_id_fkey" FOREIGN KEY ("survey_id") REFERENCES "surveys"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "surveys" ADD CONSTRAINT "surveys_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_department_id_fkey" FOREIGN KEY ("department_id") REFERENCES "departments"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users_surveys" ADD CONSTRAINT "users_surveys_survey_id_fkey" FOREIGN KEY ("survey_id") REFERENCES "surveys"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "users_surveys" ADD CONSTRAINT "users_surveys_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
