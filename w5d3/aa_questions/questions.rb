require 'sqlite3'
require 'singleton'
require 'pry'

class QuestionsDatabase < SQLite3::Database
    include Singleton

    def initialize
        super('questions.db')
        # self.type_translation = true
        # self.results_as_hash = true
    end


end

class User
    def self.find_by_id 
        user = QuestionsDatabase.instance.execute(<<-SQL, id
            SELECT * 
            FROM users 
            WHERE name = ?
        SQL
        return nil unless user.length > 0

        User.new(user.first) 
    end

    def initialize(options)
        @fname = options['fname']
        @lname = option['lname']
    end

    def create
        raise "#{self} already in database" if self.id
        QuestionsDatabase.instance.execute(<<-SQL, fname, lname
            INSERT INTO users (fname, lname)
            VALUES(?, ?)
        SQL
        self.id = QuestionsDatabase.instance.last_insert_row_id
    end

    def update
        raise "#{self} not in database" unless self.id
        QuestionsDatabase.instance.execute(<<-SQL, fname, lname, self.id
            UPDATE users 
            SET fname = ?, lname = ?
            WHERE id = ?
        SQL
    end
end

class Question
    def self.find_by_id 
        question = QuestionsDatabase.instance.execute(<<-SQL, self.id
            SELECT * 
            FROM questions 
            WHERE id = ?
        SQL
        return nil unless question.length > 0
        Question.new(question.first)
    end

    def initialize(options)
        @title = options['title']
        @body = options['body']
        @author_id = options['author_id']
    end

    def create
        raise "#{self} already in database" if self.id
        QuestionsDatabase.instance.execute(<<-SQL, self.title, self.body, self.author_id
            INSERT INTO questions (title, body, author_id)
            VALUES(?, ?, ?)
        SQL
        self.id = QuestionsDatabase.instance.last_insert_row_id
    end

    def update
        raise "#{self} not in database" unless self.id
        QuestionsDatabase.instance.execute(<<-SQL, self.title, self.body, self.author_id, self.id
            UPDATE questions
            SET title = ?, body = ?, author_id = ?
            WHERE id = ?
        SQL
    end
end

class QuestionFollow
    def self.find_by_id

    end

    def initialize(options)
        @question_id = options['question_id']
        @follower_id = options['follower_id']
    end

    def create
        raise "#{self} already in database" if self.id
        QuestionsDatabase.instance.execute(<<-SQL, self.question_id, self.follower_id
            INSERT INTO question_follows (question_id, follower_id)
            VALUES(?, ?)
        SQL
        self.id = QuestionsDatabase.instance.last_insert_row_id
    end

    def update
        raise "#{self} not in database" unless self.id
        QuestionsDatabase.instance.execute(<<-SQL, self.question_id, self.follower_id, self.id
            UPDATE question_follow(question_id, follower_id)
            SET question_id = ?, follower_id = ?
            WHERE id = ?
        SQL
    end
end

class Reply
    def self.find_by_id

    end

    def initialize(options)
        @subject_question_id = options['subject_question_id']
        @parent_reply_id = options['parent_reply_id']
        @author_id = options['author_id']
        @body = options['body']
    end

    def create
        raise "#{self} already in database" if self.id
        QuestionsDatabase.instance.execute(<<-SQL, self.subject_question_id, self.parent_reply_id, self.author_id, self.body
            INSERT INTO replies (subject_question_id, parent_reply_id, author_id, body)
            VALUES(?, ?, ?, ?)
        SQL
        self.id = QuestionsDatabase.instance.last_insert_row_id
    end

    def update
        raise "#{self} not in database" unless self.id
        QuestionsDatabase.instance.execute(<<-SQL, self.subject_question_id, self.parent_reply_id, self.author_id, self.body
            UPDATE replies 
            SET subject_question_id = ?, parent_reply_id = ?, author_id = ?, body = ?
            WHERE id = ?
        SQL
    end
end

class QuestionLike
    def self.find_by_id
        
    end

    def initialize(options)
        @user_id = options['user_id']
        @question_id = options['question_id']
    end

    def create
        raise "#{self} already in database" if self.id
        QuestionsDatabase.instance.execute(<<-SQL, self.user_id, self.question_id
            INSERT INTO question_likes (user_id, question_id)
            VALUES(?, ?)
        SQL
        self.id = QuestionsDatabase.instance.last_insert_row_id
    end

    def update
        raise "#{self} not in database" unless self.id
        QuestionsDatabase.instance.execute(<<-SQL, self.user_id, self.question_id, self.id
            UPDATE question_likes
            SET user_id = ?, question_id = ?
            WHERE id = ?
        SQL
    end
end
