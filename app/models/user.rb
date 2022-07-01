class User < ApplicationRecord
    has_many :notes, dependent: :destroy
  
    has_secure_password
    VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
    validates :email, presence: true, length: { maximum: 255 },
                      format: { with: VALID_EMAIL_REGEX },
                      uniqueness: { case_sensitive: false }, uniqueness:true
  
    validates :bio, presence: true, length: {minimum: 10}
    validates :username,  presence: true, uniqueness: true
end
